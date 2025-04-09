
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2, CheckSquare, Calendar } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface ChecklistItem {
  id: string;
  task: string;
  completed: boolean;
  dueDate?: string;
}

const defaultTasks = [
  "Book Venue",
  "Choose Caterer",
  "Hire Photographer",
  "Select Wedding Dress",
  "Order Wedding Cake",
  "Book Florist",
  "Send Invitations",
  "Plan Honeymoon",
  "Book Makeup Artist",
  "Choose Wedding Theme"
];

const WeddingChecklist = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<ChecklistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Fetch checklist from localStorage
    const fetchChecklist = () => {
      setIsLoading(true);
      try {
        const storedChecklist = localStorage.getItem(`checklist_${user?.id}`);
        if (storedChecklist) {
          setTasks(JSON.parse(storedChecklist));
        } else {
          // Create default checklist
          const defaultChecklist: ChecklistItem[] = defaultTasks.map((task, index) => ({
            id: `task-${index}`,
            task,
            completed: false
          }));
          
          setTasks(defaultChecklist);
          localStorage.setItem(`checklist_${user?.id}`, JSON.stringify(defaultChecklist));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchChecklist();
  }, [user?.id]);

  const saveChecklist = (newChecklist: ChecklistItem[]) => {
    setTasks(newChecklist);
    localStorage.setItem(`checklist_${user?.id}`, JSON.stringify(newChecklist));
  };

  const toggleTaskCompletion = (taskId: string) => {
    const updatedTasks = tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    
    saveChecklist(updatedTasks);
    
    const completedTask = updatedTasks.find(task => task.id === taskId);
    if (completedTask?.completed) {
      toast({
        title: "Task completed",
        description: `"${completedTask.task}" marked as done!`
      });
    }
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    
    const newTaskItem: ChecklistItem = {
      id: `task-${Date.now()}`,
      task: newTask,
      completed: false
    };
    
    const updatedTasks = [...tasks, newTaskItem];
    saveChecklist(updatedTasks);
    setNewTask("");
    
    toast({
      title: "Task added",
      description: "New task added to your wedding checklist."
    });
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    saveChecklist(updatedTasks);
    
    toast({
      title: "Task deleted",
      description: "Task removed from your wedding checklist."
    });
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-alex text-primary">Wedding Checklist</CardTitle>
          <CardDescription>Loading your checklist...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-alex text-primary">Wedding Checklist</CardTitle>
        <CardDescription>Keep track of your wedding planning tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              className="flex-1"
            />
            <Button onClick={addTask} className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" /> Add
            </Button>
          </div>
        </div>

        <div className="space-y-1">
          {tasks.length === 0 ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <CheckSquare className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">Your checklist is empty</h3>
              <p className="text-gray-500 mb-4">
                Add tasks to keep track of your wedding planning.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex justify-between border-b pb-2 mb-3">
                <div className="font-medium">Pending Tasks ({tasks.filter(t => !t.completed).length})</div>
                <div className="text-gray-500">
                  {tasks.filter(t => t.completed).length}/{tasks.length} completed
                </div>
              </div>
              
              {tasks
                .filter(task => !task.completed)
                .map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between py-3 border-b"
                  >
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleTaskCompletion(task.id)}
                        id={`task-${task.id}`}
                      />
                      <label
                        htmlFor={`task-${task.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {task.task}
                      </label>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteTask(task.id)}
                      className="h-8 w-8 p-0 text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              
              {tasks.some(task => task.completed) && (
                <>
                  <div className="font-medium mt-6 border-b pb-2 mb-3">
                    Completed Tasks ({tasks.filter(t => t.completed).length})
                  </div>
                  
                  {tasks
                    .filter(task => task.completed)
                    .map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center justify-between py-3 border-b text-gray-500"
                      >
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            checked={task.completed}
                            onCheckedChange={() => toggleTaskCompletion(task.id)}
                            id={`task-${task.id}`}
                          />
                          <label
                            htmlFor={`task-${task.id}`}
                            className="text-sm font-medium leading-none line-through peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {task.task}
                          </label>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteTask(task.id)}
                          className="h-8 w-8 p-0 text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                </>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeddingChecklist;
