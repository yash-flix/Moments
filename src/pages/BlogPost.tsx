
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { vendors } from "@/data/vendors";

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    slug: "top-10-wedding-planning-tips-for-2025",
    title: "Top 10 Wedding Planning Tips for 2025",
    excerpt: "Plan your dream wedding with these expert tips that will help you navigate the latest trends and ensure a memorable celebration.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "January 15, 2025",
    author: "Priya Sharma",
    category: "Planning",
    tags: ["wedding planning", "tips", "2025 trends"],
    content: `
      <p>Planning a wedding in 2025 brings both exciting opportunities and unique challenges. With evolving trends and shifting expectations, couples need to stay informed about the latest approaches to wedding planning. Here are our top 10 tips to help you create your dream wedding in 2025:</p>
      
      <h2>1. Start Planning Early</h2>
      <p>Due to the post-pandemic wedding boom, venues and vendors are booking much further in advance than ever before. Begin your planning at least 12-18 months before your desired date to secure your top choices.</p>
      
      <h2>2. Embrace Personalization</h2>
      <p>The era of cookie-cutter weddings is over. In 2025, personalization is key. Consider how you can infuse your unique story, cultural backgrounds, and personal tastes into every aspect of your celebration.</p>
      
      <h2>3. Consider Sustainability</h2>
      <p>Eco-conscious weddings are no longer just a trend but an expectation. Look for vendors who prioritize sustainable practices, consider digital invitations, and opt for locally-sourced flowers and food.</p>
      
      <h2>4. Be Flexible with Dates</h2>
      <p>Consider weekday weddings or off-season dates to save on costs and increase venue availability. Many venues offer significant discounts for non-Saturday events.</p>
      
      <h2>5. Prioritize Your Budget</h2>
      <p>With rising costs, it's crucial to determine what aspects of the wedding matter most to you. Allocate more budget to those priorities and be willing to compromise on elements that are less important.</p>
      
      <h2>6. Incorporate Technology</h2>
      <p>From AI-powered planning tools to live streaming for guests who can't attend in person, technology can enhance your wedding experience. Consider creating a wedding website or app to keep guests informed.</p>
      
      <h2>7. Focus on Guest Experience</h2>
      <p>In 2025, weddings are increasingly focused on creating memorable experiences for guests. Consider interactive food stations, entertainment beyond just dancing, and thoughtful welcome gifts.</p>
      
      <h2>8. Plan for Weather Contingencies</h2>
      <p>With unpredictable weather patterns becoming more common, always have a solid backup plan for outdoor elements of your wedding.</p>
      
      <h2>9. Book a Professional Coordinator</h2>
      <p>Even if you're planning most of the wedding yourself, consider at least a day-of coordinator to manage the logistics so you can be fully present on your special day.</p>
      
      <h2>10. Take Care of Yourself</h2>
      <p>Wedding planning can be stressful. Remember to schedule regular breaks, date nights unrelated to wedding planning, and self-care activities to maintain your well-being throughout the process.</p>
      
      <p>By following these tips, you'll be well on your way to planning a memorable and meaningful wedding celebration in 2025. Remember, at the end of the day, your wedding is about celebrating your love story—everything else is just details.</p>
    `
  },
  {
    id: 2,
    slug: "how-to-choose-the-perfect-wedding-venue",
    title: "How to Choose the Perfect Wedding Venue",
    excerpt: "Finding the right venue is one of the most important decisions you'll make. Here's a comprehensive guide to help you choose wisely.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "February 5, 2025",
    author: "Raj Patel",
    category: "Venues",
    tags: ["wedding venue", "location", "selection criteria"],
    content: `
      <p>Selecting the perfect wedding venue is one of the most significant decisions you'll make during the planning process. The venue sets the tone for your entire celebration and influences many other aspects of your wedding, from the decor to the menu. Here's a comprehensive guide to help you find the ideal location for your special day.</p>
      
      <h2>Determine Your Budget</h2>
      <p>Before you start venue hunting, establish a clear budget. Typically, your venue and catering will account for about 40-50% of your total wedding budget. Knowing your financial boundaries will help narrow down options and prevent falling in love with venues beyond your means.</p>
      
      <h2>Estimate Guest Count</h2>
      <p>Having an approximate guest count is crucial before venue shopping. You'll need a space that comfortably accommodates all your guests without feeling too empty or overcrowded. Remember to consider seating arrangements, dance floor space, and any other activities you're planning.</p>
      
      <h2>Define Your Wedding Style</h2>
      <p>Are you dreaming of a rustic celebration, an elegant ballroom affair, or a beachside ceremony? Your personal style should guide your venue selection. The venue should enhance your vision rather than require excessive decoration to mask its existing features.</p>
      
      <h2>Consider the Season</h2>
      <p>The time of year will significantly impact your venue choices. For summer weddings, ensure indoor venues have adequate air conditioning. For winter celebrations, check heating systems and accessibility in case of inclement weather. Outdoor venues should have appropriate contingency plans for unexpected weather conditions.</p>
      
      <h2>Visit Multiple Venues</h2>
      <p>Schedule visits to several venues that meet your initial criteria. During these visits, pay attention to:</p>
      <ul>
        <li>The overall ambiance and how it makes you feel</li>
        <li>Lighting (both natural and artificial)</li>
        <li>Available spaces for ceremony, cocktail hour, reception, and photos</li>
        <li>Bathroom facilities and their condition</li>
        <li>Accessibility features for elderly or disabled guests</li>
        <li>Parking availability and transportation options</li>
        <li>Noise restrictions and curfews</li>
      </ul>
      
      <h2>Ask the Right Questions</h2>
      <p>When meeting with venue coordinators, come prepared with a list of questions:</p>
      <ul>
        <li>What's included in the rental fee?</li>
        <li>Are there any hidden costs or mandatory vendors?</li>
        <li>What's the payment schedule and cancellation policy?</li>
        <li>Is there a coordinator on-site during the event?</li>
        <li>What time can vendors arrive for setup?</li>
        <li>Are there any decoration restrictions?</li>
        <li>What's the overtime fee if the reception runs long?</li>
      </ul>
      
      <h2>Check Reviews and References</h2>
      <p>Research online reviews and ask the venue for references from past couples. This will give you insight into how the venue operates on actual wedding days and how they handle any issues that arise.</p>
      
      <h2>Trust Your Instincts</h2>
      <p>After gathering all the practical information, trust your feelings. The right venue will not only meet your functional requirements but will also feel special and meaningful to you as a couple.</p>
      
      <p>Remember, booking your venue is just the beginning of an exciting journey toward your wedding day. Take your time with this decision, as it will set the foundation for many other elements of your celebration.</p>
    `
  },
  {
    id: 3,
    slug: "budget-friendly-wedding-decoration-ideas",
    title: "Budget-Friendly Wedding Decoration Ideas",
    excerpt: "Create a stunning wedding atmosphere without breaking the bank. Discover creative and affordable decoration ideas for your celebration.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "March 10, 2025",
    author: "Ananya Singh",
    category: "Decorations",
    tags: ["budget wedding", "DIY decorations", "affordable ideas"],
    content: `
      <p>Creating a beautiful wedding atmosphere doesn't have to drain your bank account. With some creativity and smart planning, you can design a stunning celebration that reflects your personal style while staying within budget. Here are some practical and affordable decoration ideas to transform your wedding venue into a magical space.</p>
      
      <h2>Focus on High-Impact Areas</h2>
      <p>Instead of trying to decorate every inch of your venue, concentrate your budget and efforts on a few high-impact areas that will draw the most attention and appear in most photographs:</p>
      <ul>
        <li>The ceremony backdrop or altar</li>
        <li>The entrance or welcome area</li>
        <li>The head table or sweetheart table</li>
        <li>The cake table</li>
      </ul>
      <p>By creating stunning focal points, you'll create the impression of lavish decorations throughout.</p>
      
      <h2>Embrace Candlelight</h2>
      <p>Few decorative elements create ambiance as effectively as candlelight, and it's remarkably affordable. Consider:</p>
      <ul>
        <li>Floating candles in simple glass containers</li>
        <li>Pillar candles of varying heights grouped together</li>
        <li>Tea lights in inexpensive holders scattered across tables</li>
        <li>LED candles for venues with open-flame restrictions</li>
      </ul>
      <p>The warm glow will create a romantic atmosphere and flattering lighting for photos.</p>
      
      <h2>Maximize Greenery</h2>
      <p>Lush greenery is both on-trend and more affordable than elaborate floral arrangements:</p>
      <ul>
        <li>Eucalyptus garlands for table runners</li>
        <li>Potted herbs or small plants as dual-purpose centerpieces and favors</li>
        <li>Ferns and leafy branches in tall vases for dramatic height</li>
        <li>Ivy or trailing greenery to decorate arches and railings</li>
      </ul>
      
      <h2>Repurpose Ceremony Decorations</h2>
      <p>Design your ceremony decorations with reuse in mind:</p>
      <ul>
        <li>Move ceremony floral arrangements to the reception as centerpieces</li>
        <li>Repurpose aisle decorations to adorn the bar or buffet tables</li>
        <li>Transform the ceremony backdrop into a photo booth background</li>
      </ul>
      <p>This strategy essentially cuts your decoration budget in half.</p>
      
      <h2>Thrift and Upcycle</h2>
      <p>Visit thrift stores, garage sales, and online marketplaces for affordable decorative items:</p>
      <ul>
        <li>Mismatched vintage frames for table numbers or signage</li>
        <li>Glass bottles and jars for simple flower arrangements</li>
        <li>Vintage books as part of centerpiece displays</li>
        <li>Second-hand lanterns, candle holders, or decorative items</li>
      </ul>
      <p>With some paint or minor modifications, these items can be transformed to match your wedding aesthetic.</p>
      
      <h2>DIY Strategically</h2>
      <p>While DIY can save money, it's important to be selective:</p>
      <ul>
        <li>Choose projects that can be completed well in advance</li>
        <li>Opt for simple designs that don't require specialized skills</li>
        <li>Host crafting parties with friends to make the work enjoyable</li>
        <li>Calculate the true cost (including supplies and your time) before committing</li>
      </ul>
      
      <h2>Rent Rather Than Buy</h2>
      <p>For items you'll only use once, consider renting:</p>
      <ul>
        <li>Decorative arches or backdrops</li>
        <li>Specialty linens</li>
        <li>Large decorative pieces like vintage furniture</li>
        <li>Lighting equipment</li>
      </ul>
      
      <h2>Use Natural Elements</h2>
      <p>Incorporate seasonal and natural elements for affordable texture and interest:</p>
      <ul>
        <li>Pinecones, branches, or autumn leaves for fall weddings</li>
        <li>Seashells and driftwood for beach celebrations</li>
        <li>Wildflowers for spring or summer events</li>
      </ul>
      
      <p>Remember, the most memorable weddings aren't necessarily the most expensive ones. By thoughtfully selecting decorations that reflect your personality and relationship, you'll create a meaningful atmosphere that celebrates your love story beautifully—without the financial stress.</p>
    `
  },
  {
    id: 4,
    slug: "latest-trends-in-wedding-photography",
    title: "Latest Trends in Wedding Photography",
    excerpt: "Stay up-to-date with the newest photography styles and techniques that will capture your wedding day in the most beautiful and authentic way.",
    image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    date: "April 22, 2025",
    author: "Vikram Kapoor",
    category: "Photography",
    tags: ["wedding photography", "photo trends", "candid shots"],
    content: `
      <p>Wedding photography continues to evolve, with each year bringing innovative approaches to capturing one of life's most significant celebrations. As we move through 2025, several exciting trends are shaping how wedding photographers document love stories. Whether you're planning your wedding or simply appreciate photographic artistry, here's a look at the latest trends transforming wedding photography.</p>
      
      <h2>Documentary-Style Storytelling</h2>
      <p>Today's couples are increasingly valuing authentic moments over perfectly posed shots. Documentary or photojournalistic wedding photography focuses on capturing the day as it naturally unfolds, resulting in genuine emotions and spontaneous interactions. Photographers adopting this approach blend into the background, becoming observers rather than directors, to create a truthful visual narrative of the day.</p>
      
      <h2>Cinematic Aesthetics</h2>
      <p>Influenced by filmmaking, cinematic wedding photography employs dramatic lighting, creative composition, and thoughtful framing to create images that resemble movie stills. This approach often features:</p>
      <ul>
        <li>Dramatic contrasts between light and shadow</li>
        <li>Wide-angle environmental portraits that incorporate the surrounding scenery</li>
        <li>Carefully crafted compositions with foreground and background elements</li>
        <li>Rich, film-inspired color grading</li>
      </ul>
      <p>The result is a collection of photographs that feel both timeless and contemporary.</p>
      
      <h2>Drone Photography</h2>
      <p>Aerial photography has transformed from a novelty to an essential component of wedding coverage. Drone shots provide unique perspectives of the venue, capture the scale of outdoor celebrations, and create stunning couple portraits that showcase the surrounding landscape. As drone technology becomes more sophisticated and accessible, these aerial views are becoming a standard feature in comprehensive wedding packages.</p>
      
      <h2>Fine Art Approach</h2>
      <p>Fine art wedding photography merges technical precision with artistic vision to create images that could hang in a gallery. Characterized by:</p>
      <ul>
        <li>Exceptional attention to composition and light</li>
        <li>Thoughtful, often minimalist styling</li>
        <li>Soft, ethereal quality achieved through specific equipment and editing techniques</li>
        <li>An emphasis on beauty and emotion over documentation</li>
      </ul>
      <p>This style appeals to couples who view their wedding images as not just memories but artistic heirlooms.</p>
      
      <h2>Multimedia Presentations</h2>
      <p>Modern wedding photographers are increasingly delivering multimedia packages that combine still photography with:</p>
      <ul>
        <li>Short-form highlight videos</li>
        <li>Animated cinemagraphs (still photos with subtle moving elements)</li>
        <li>Audio recordings integrated with image slideshows</li>
        <li>Interactive digital albums</li>
      </ul>
      <p>These comprehensive packages provide a multi-sensory way to revisit the wedding day.</p>
      
      <h2>AI-Enhanced Editing</h2>
      <p>Artificial intelligence is revolutionizing post-production workflows, allowing photographers to:</p>
      <ul>
        <li>Quickly sort through thousands of images to identify the best shots</li>
        <li>Apply sophisticated retouching with unprecedented precision</li>
        <li>Create consistent looks across varied lighting conditions</li>
        <li>Generate alternative compositions or styling options</li>
      </ul>
      <p>While AI serves as a powerful tool, the photographer's artistic vision remains the guiding force behind the final images.</p>
      
      <h2>Analog Revival</h2>
      <p>In reaction to the digital saturation of everyday life, many couples are requesting film photography for their weddings. Whether shooting entirely on film or incorporating it alongside digital coverage, photographers are embracing:</p>
      <ul>
        <li>Medium and large format film for portraits</li>
        <li>Instant cameras for interactive guest experiences</li>
        <li>Vintage processes like tintype or polaroid transfers</li>
        <li>Hybrid approaches that combine film's distinctive look with digital convenience</li>
      </ul>
      
      <h2>Day-After Sessions</h2>
      <p>To reduce time pressure on the wedding day, many couples are scheduling separate portrait sessions the day after the ceremony. These relaxed sessions allow for:</p>
      <ul>
        <li>Visiting multiple locations without rushing</li>
        <li>More adventurous settings that might not be practical in wedding attire</li>
        <li>Incorporating the golden hour light without disrupting the reception</li>
        <li>A more relaxed experience after the wedding day adrenaline has subsided</li>
      </ul>
      
      <p>As with any trend, the most important consideration is choosing approaches that resonate with your personal style and values. The best wedding photographers will adapt these trends to complement your unique story, creating images that feel both contemporary and timeless—photographs you'll treasure for generations.</p>
    `
  },
  {
    id: 5,
    slug: "catering-ideas-for-a-memorable-wedding",
    title: "Catering Ideas for a Memorable Wedding",
    excerpt: "Food is a crucial part of any wedding celebration. Explore innovative catering concepts that will delight your guests and create lasting memories.",
    image: "https://images.unsplash.com/photo-1486428263684-28ec9e4f2584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    date: "May 8, 2025",
    author: "Neha Verma",
    category: "Catering",
    tags: ["wedding food", "catering", "menu planning"],
    content: `
      <p>The culinary experience at your wedding is more than just a meal—it's an opportunity to express your personality, honor traditions, and create lasting memories for your guests. As wedding catering evolves beyond the standard three-course dinner, couples are embracing creative approaches to sharing food and drinks on their special day. Here are some innovative catering ideas to make your wedding menu as memorable as the celebration itself.</p>
      
      <h2>Interactive Food Stations</h2>
      <p>Interactive food stations transform dining into an engaging experience. Consider:</p>
      <ul>
        <li>Made-to-order pasta stations where chefs prepare dishes with guests' chosen ingredients</li>
        <li>Build-your-own taco or slider bars with an array of toppings and sauces</li>
        <li>Freshly prepared sushi with chefs demonstrating their artistry</li>
        <li>Flambeé stations where desserts are dramatically prepared with flames</li>
        <li>Regional street food carts representing places significant to your relationship</li>
      </ul>
      <p>These stations encourage movement, conversation, and a customized dining experience.</p>
      
      <h2>Family-Style Service</h2>
      <p>Family-style dining—where large, shared platters are placed on each table—creates a warm, convivial atmosphere. This approach:</p>
      <ul>
        <li>Encourages interaction among tablemates as they pass dishes</li>
        <li>Allows guests to control their own portions</li>
        <li>Creates a relaxed, intimate feeling reminiscent of family gatherings</li>
        <li>Provides abundant food options without the formality of a plated service</li>
      </ul>
      <p>When planning family-style service, ensure tables have sufficient space for both food platters and place settings.</p>
      
      <h2>Heritage-Inspired Menus</h2>
      <p>Honoring cultural backgrounds through food creates a meaningful experience:</p>
      <ul>
        <li>Fusion menus that blend both partners' cultural cuisines</li>
        <li>Multi-course journeys through family recipes from different generations</li>
        <li>Traditional dishes presented with contemporary techniques</li>
        <li>Food stations representing different regions or family backgrounds</li>
      </ul>
      <p>Include menu cards that share the significance of special dishes, adding a personal touch that guests will appreciate.</p>
      
      <h2>Elevated Comfort Food</h2>
      <p>Reimagined comfort classics combine familiarity with sophistication:</p>
      <ul>
        <li>Miniature versions of childhood favorites (gourmet grilled cheese, upscale mac and cheese)</li>
        <li>Deconstructed classics presented with artistic flair</li>
        <li>Comfort food pairings with fine wines or craft cocktails</li>
        <li>High-quality ingredients elevating simple, beloved recipes</li>
      </ul>
      <p>This approach balances culinary creativity with approachable flavors that please diverse palates.</p>
      
      <h2>Seasonal and Local Focus</h2>
      <p>Embracing seasonal ingredients from local sources offers multiple benefits:</p>
      <ul>
        <li>Peak flavor and freshness</li>
        <li>Support for local agricultural communities</li>
        <li>Reduced environmental impact</li>
        <li>Menus that naturally complement your wedding's season</li>
      </ul>
      <p>Work with caterers who have established relationships with local farmers and producers for the best results.</p>
      
      <h2>Beverage Experiences</h2>
      <p>Innovative drink services create memorable moments:</p>
      <ul>
        <li>Craft cocktail stations where mixologists create signature drinks</li>
        <li>Wine or whiskey tasting flights paired with complementary bites</li>
        <li>Mocktail bars featuring sophisticated non-alcoholic options</li>
        <li>Personalized drink menus telling your story through carefully selected beverages</li>
        <li>Local brewery or winery features highlighting regional specialties</li>
      </ul>
      
      <h2>Late-Night Snacks</h2>
      <p>Surprise your guests with late-night offerings after hours of dancing:</p>
      <ul>
        <li>Food trucks serving casual favorites</li>
        <li>Breakfast-for-dinner stations with waffles or breakfast sandwiches</li>
        <li>Nostalgic treats like milk and cookies or mini milkshakes</li>
        <li>Local specialties that showcase your wedding destination</li>
      </ul>
      <p>These unexpected offerings will be especially appreciated by guests who've worked up an appetite on the dance floor.</p>
      
      <h2>Dietary Inclusivity</h2>
      <p>Modern wedding menus thoughtfully accommodate all guests:</p>
      <ul>
        <li>Plant-based options that appeal to everyone, not just vegetarians</li>
        <li>Clearly labeled dishes identifying common allergens</li>
        <li>Kid-friendly options that don't feel like an afterthought</li>
        <li>Balance of indulgent choices and healthier alternatives</li>
      </ul>
      <p>The goal is ensuring every guest feels considered and can fully enjoy the dining experience.</p>
      
      <p>Remember, the most successful wedding menu reflects your personal story, preferences, and values as a couple. Work closely with your caterer to develop a customized culinary experience that will have guests reminiscing about your wedding for years to come—not just for the beauty of the day, but for the delicious memories created around the table.</p>
    `
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-lg w-full text-center">
            <h1 className="text-6xl font-alex text-primary mb-4">404</h1>
            <h2 className="text-2xl font-playfair font-semibold mb-4">Article Not Found</h2>
            <p className="text-gray-600 mb-8">
              The article you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/blog">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const relatedVendors = post.category === "Decorators" ? vendors.filter(v => v.category === "decorators").slice(0, 3) :
                         post.category === "Catering" ? vendors.filter(v => v.category === "caterers").slice(0, 3) :
                         post.category === "Photography" ? vendors.filter(v => v.category === "photographers").slice(0, 3) :
                         vendors.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="container-custom py-8">
        <Link to="/blog" className="text-primary hover:underline mb-8 inline-flex items-center">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <article className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-96">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4">{post.title}</h1>
                
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-6 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center mr-6 mb-2">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center flex-wrap">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.tags.map((tag, index) => (
                      <span key={index} className="mr-2 mb-2">
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                
                <div className="border-t border-gray-200 mt-8 pt-6">
                  <h4 className="font-semibold mb-2">Share this article:</h4>
                  <div className="flex space-x-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Facebook className="h-5 w-5" />
                    </button>
                    <button className="text-blue-400 hover:text-blue-600">
                      <Twitter className="h-5 w-5" />
                    </button>
                    <button className="text-blue-700 hover:text-blue-900">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          
          <div className="md:w-1/4">
            <div className="sticky top-4">
              <div className="bg-white rounded-lg border p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter(p => p.id !== post.id)
                    .slice(0, 3)
                    .map(relatedPost => (
                      <div key={relatedPost.id} className="flex items-start">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-16 h-16 object-cover rounded-md mr-3"
                        />
                        <div>
                          <Link
                            to={`/blog/${relatedPost.slug}`}
                            className="font-medium hover:text-primary transition-colors line-clamp-2"
                          >
                            {relatedPost.title}
                          </Link>
                          <p className="text-sm text-gray-500">{relatedPost.date}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4">Related Vendors</h3>
                <div className="space-y-4">
                  {relatedVendors.map(vendor => (
                    <div key={vendor.id} className="flex items-start">
                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-16 h-16 object-cover rounded-md mr-3"
                      />
                      <div>
                        <Link
                          to={`/vendor/${vendor.id}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {vendor.name}
                        </Link>
                        <p className="text-sm text-gray-500">{vendor.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link to="/vendors">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Find More Vendors
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Chatbot />
      <Footer />
    </div>
  );
};

export default BlogPost;
