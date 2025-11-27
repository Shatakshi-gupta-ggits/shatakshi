import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Wrench, ChevronDown } from "lucide-react";

const productsForSale = [
  {
    title: "E-Commerce Starter Kit",
    description: "Complete full-stack e-commerce solution with payment integration, admin dashboard, and inventory management. Ready to deploy.",
    price: "$299",
    features: ["React + Node.js", "Payment Integration", "Admin Panel", "Mobile Responsive"],
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
  },
  {
    title: "AI Chatbot Template",
    description: "Pre-built AI chatbot with OpenAI integration, customizable responses, and analytics dashboard. Easy to integrate into any website.",
    price: "$199",
    features: ["OpenAI GPT", "Analytics", "Customizable", "API Ready"],
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
  },
  {
    title: "SaaS Boilerplate",
    description: "Production-ready SaaS template with authentication, subscription billing, team management, and multi-tenancy support.",
    price: "$399",
    features: ["Auth System", "Stripe Billing", "Team Features", "Multi-tenant"],
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
  },
  {
    title: "Dashboard UI Kit",
    description: "Modern admin dashboard with 50+ pre-built components, charts, tables, and forms. Built with React and Tailwind CSS.",
    price: "$149",
    features: ["50+ Components", "Dark Mode", "Charts", "Responsive"],
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
  },
];

const ProjectsForSale = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? productsForSale : productsForSale.slice(0, 2);

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 relative" id="products">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Products</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Ready-Made Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Premium templates and boilerplates to accelerate your development. Fully customizable to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {displayedProducts.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500 animate-on-scroll border border-gray-100 hover:border-pulse-500/20 hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-pulse-100 to-pulse-200 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-pulse-500">{product.price}</span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-pulse-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-pulse-500 hover:bg-pulse-600 text-white transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-pulse-500 text-pulse-500 hover:bg-pulse-50 transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    <Wrench className="w-4 h-4 mr-2" />
                    Customize
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {productsForSale.length > 2 && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              size="lg"
            >
              {showAll ? "Show Less" : "View More Products"}
              <ChevronDown className={`w-5 h-5 ml-2 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsForSale;