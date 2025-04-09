
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Calendar, Clock, Pencil, Trash2, AlertTriangle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Appointment {
  id: string;
  vendorId: number;
  vendorName: string;
  date: string;
  status: "pending" | "confirmed" | "canceled";
  service: string;
  comments: string;
}

const AppointmentsList = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [appointmentToDelete, setAppointmentToDelete] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  useEffect(() => {
    // Fetch appointments from localStorage
    const fetchAppointments = () => {
      setIsLoading(true);
      try {
        const storedAppointments = localStorage.getItem(`appointments_${user?.id}`);
        if (storedAppointments) {
          setAppointments(JSON.parse(storedAppointments));
        } else {
          // Dummy data for demonstration
          const dummyAppointments: Appointment[] = [
            {
              id: "app1",
              vendorId: 1,
              vendorName: "Dreamz Wedding Planner",
              date: new Date().toISOString(),
              status: "confirmed",
              service: "Full Wedding Planning",
              comments: "Looking for complete planning for a 200-guest wedding"
            },
            {
              id: "app2",
              vendorId: 5,
              vendorName: "Blossom Events",
              date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
              status: "pending",
              service: "Decoration",
              comments: "Need floral decorations for the venue"
            }
          ];
          
          setAppointments(dummyAppointments);
          localStorage.setItem(`appointments_${user?.id}`, JSON.stringify(dummyAppointments));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchAppointments();
  }, [user?.id]);

  const handleCancelAppointment = (id: string) => {
    const updatedAppointments = appointments.map(appointment => 
      appointment.id === id 
        ? { ...appointment, status: "canceled" as const } 
        : appointment
    );
    
    setAppointments(updatedAppointments);
    localStorage.setItem(`appointments_${user?.id}`, JSON.stringify(updatedAppointments));
    
    toast({
      title: "Appointment canceled",
      description: "Your appointment has been canceled successfully."
    });
  };

  const handleDeleteAppointment = () => {
    if (!appointmentToDelete) return;
    
    const updatedAppointments = appointments.filter(
      appointment => appointment.id !== appointmentToDelete
    );
    
    setAppointments(updatedAppointments);
    localStorage.setItem(`appointments_${user?.id}`, JSON.stringify(updatedAppointments));
    
    setAppointmentToDelete(null);
    setIsDeleteDialogOpen(false);
    
    toast({
      title: "Appointment deleted",
      description: "Your appointment has been deleted successfully."
    });
  };

  const confirmDelete = (id: string) => {
    setAppointmentToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500">Confirmed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case "canceled":
        return <Badge className="bg-gray-500">Canceled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-alex text-primary">Your Appointments</CardTitle>
          <CardDescription>Loading your appointment details...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-alex text-primary">Your Appointments</CardTitle>
        <CardDescription>Manage your upcoming appointments with vendors</CardDescription>
      </CardHeader>
      <CardContent>
        {appointments.length === 0 ? (
          <div className="text-center py-12">
            <div className="flex justify-center mb-4">
              <Calendar className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">No appointments yet</h3>
            <p className="text-gray-500 mb-4">
              You haven't booked any appointments with vendors.
            </p>
            <Link to="/vendors">
              <Button className="bg-primary hover:bg-primary/90">
                Browse Vendors
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div 
                key={appointment.id} 
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium">{appointment.vendorName}</h3>
                      {getStatusBadge(appointment.status)}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{format(new Date(appointment.date), "PPP")}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{format(new Date(appointment.date), "p")}</span>
                    </div>
                    <div className="mb-1">
                      <span className="text-sm text-gray-600">Service: </span>
                      <span>{appointment.service}</span>
                    </div>
                    {appointment.comments && (
                      <p className="text-sm text-gray-600 mt-1">{appointment.comments}</p>
                    )}
                  </div>
                  
                  <div className="flex space-x-2 self-end md:self-auto">
                    <Link to={`/vendor/${appointment.vendorId}`}>
                      <Button variant="outline" size="sm">
                        View Vendor
                      </Button>
                    </Link>
                    
                    {appointment.status !== "canceled" && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-yellow-600 border-yellow-600"
                        onClick={() => handleCancelAppointment(appointment.id)}
                      >
                        Cancel
                      </Button>
                    )}
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-red-600 border-red-600"
                      onClick={() => confirmDelete(appointment.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this appointment? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex space-x-2 justify-end">
              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={handleDeleteAppointment}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default AppointmentsList;
