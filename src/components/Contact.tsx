import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Instagram, Twitter, Github, Mail, Phone, Send, CheckCircle2, Loader2, MapPin, Clock } from "lucide-react";
import { useScrollAnimation, scrollAnimationClasses } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import AnimatedLines from "./AnimatedLines";
import { usePersona } from "@/contexts/PersonaContext";

const Contact = () => {
  const { toast } = useToast();
  const { persona } = usePersona();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();

  const isPurple = persona === "tutor";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/shatakshi1", color: "group-hover:bg-blue-600" },
    { icon: Github, label: "GitHub", href: "https://github.com/Shatakshi-gupta-ggits", color: "group-hover:bg-gray-900 dark:group-hover:bg-white dark:group-hover:text-gray-900" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "group-hover:bg-blue-400" },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden" id="contact">
      <AnimatedLines variant="horizontal" color={isPurple ? "purple" : "pulse"} />
      
      {/* Background decorations */}
      <div className={cn(
        "absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2",
        isPurple ? "bg-purple-500/5" : "bg-pulse-500/5"
      )} />
      <div className={cn(
        "absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/2 translate-y-1/2",
        isPurple ? "bg-purple-500/5" : "bg-pulse-500/5"
      )} />

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div 
          ref={headerRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700",
            headerVisible ? scrollAnimationClasses.fadeUpVisible : scrollAnimationClasses.fadeUp
          )}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">08</span>
              <span>Contact</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={cn(
              "lg:col-span-3 transition-all duration-700 delay-100",
              formVisible ? scrollAnimationClasses.fadeUpVisible : scrollAnimationClasses.fadeUp
            )}
          >
            <div className="bg-card rounded-3xl p-6 sm:p-8 shadow-elegant border border-border/50 relative overflow-hidden">
              {/* Success overlay */}
              <div className={cn(
                "absolute inset-0 bg-card z-10 flex flex-col items-center justify-center transition-all duration-500",
                isSubmitted ? "opacity-100" : "opacity-0 pointer-events-none"
              )}>
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 animate-scale-in">
                  <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">I'll get back to you soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <label 
                      className={cn(
                        "absolute left-4 transition-all duration-300 pointer-events-none text-muted-foreground",
                        focusedField === "name" || formData.name 
                          ? "-top-2.5 text-xs bg-card px-2 text-pulse-500" 
                          : "top-3.5 text-sm"
                      )}
                    >
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="h-14 text-base bg-background border-2 border-border focus:border-pulse-500 rounded-xl transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <label 
                      className={cn(
                        "absolute left-4 transition-all duration-300 pointer-events-none text-muted-foreground",
                        focusedField === "email" || formData.email 
                          ? "-top-2.5 text-xs bg-card px-2 text-pulse-500" 
                          : "top-3.5 text-sm"
                      )}
                    >
                      Your Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="h-14 text-base bg-background border-2 border-border focus:border-pulse-500 rounded-xl transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label 
                    className={cn(
                      "absolute left-4 transition-all duration-300 pointer-events-none text-muted-foreground",
                      focusedField === "subject" || formData.subject 
                        ? "-top-2.5 text-xs bg-card px-2 text-pulse-500" 
                        : "top-3.5 text-sm"
                    )}
                  >
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="h-14 text-base bg-background border-2 border-border focus:border-pulse-500 rounded-xl transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <label 
                    className={cn(
                      "absolute left-4 transition-all duration-300 pointer-events-none text-muted-foreground z-10",
                      focusedField === "message" || formData.message 
                        ? "-top-2.5 text-xs bg-card px-2 text-pulse-500" 
                        : "top-3.5 text-sm"
                    )}
                  >
                    Your Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="text-base bg-background border-2 border-border focus:border-pulse-500 rounded-xl resize-none pt-4 transition-all duration-300"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-pulse-500 hover:bg-pulse-600 text-white text-base font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 group"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Socials */}
          <div 
            ref={infoRef}
            className={cn(
              "lg:col-span-2 space-y-6 transition-all duration-700 delay-200",
              infoVisible ? scrollAnimationClasses.fadeUpVisible : scrollAnimationClasses.fadeUp
            )}
          >
            {/* Quick Info */}
            <div className="bg-card rounded-3xl p-6 shadow-elegant border border-border/50">
              <h3 className="text-lg font-display font-semibold text-foreground mb-5">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:shatakshig2005@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-pulse-500 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pulse-50 dark:bg-pulse-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-pulse-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">shatakshig2005@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+919981599184"
                  className="flex items-center gap-4 text-muted-foreground hover:text-pulse-500 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pulse-50 dark:bg-pulse-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-pulse-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium text-foreground">+91 9981 599 184</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-2xl bg-pulse-50 dark:bg-pulse-900/30 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-pulse-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-3xl p-6 shadow-elegant border border-border/50">
              <h3 className="text-lg font-display font-semibold text-foreground mb-5">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "group flex items-center gap-3 p-3 rounded-2xl bg-secondary/50 hover:bg-pulse-500 transition-all duration-300 hover:scale-105",
                      )}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                      <span className="text-sm font-medium text-foreground group-hover:text-white transition-colors">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-pulse-500 to-pulse-600 rounded-3xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for Work</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-2">
                  Let's Build Something Amazing
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Currently accepting freelance projects and full-time opportunities.
                </p>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <Clock className="w-4 h-4" />
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
