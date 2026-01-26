import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format, addDays, isBefore, isToday, startOfToday } from "date-fns";
import { CalendarIcon, Clock, CheckCircle2, ArrowRight, Video, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedLines from "./AnimatedLines";
import { useScrollAnimation, scrollAnimationClasses } from "@/hooks/useScrollAnimation";

const timeSlots = [
  { time: "09:00 AM", available: true },
  { time: "10:00 AM", available: true },
  { time: "11:00 AM", available: false },
  { time: "02:00 PM", available: true },
  { time: "03:00 PM", available: true },
  { time: "04:00 PM", available: true },
  { time: "05:00 PM", available: false },
  { time: "06:00 PM", available: true },
];

const sessionTypes = [
  {
    id: "1on1",
    icon: Video,
    title: "1-on-1 Session",
    duration: "1 hour",
    price: "$75",
    description: "Personal mentorship session focused on your specific goals",
  },
  {
    id: "group",
    icon: Users,
    title: "Group Workshop",
    duration: "2 hours",
    price: "$40",
    description: "Learn with peers in an interactive group setting",
  },
];

const BookingCalendar = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string>("1on1");
  const [step, setStep] = useState(1);
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleBookSession = async () => {
    if (!date || !selectedTime) return;
    
    setIsBooking(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsBooking(false);
    setIsBooked(true);
    
    toast({
      title: "Session Booked!",
      description: `Your ${selectedSession === "1on1" ? "1-on-1" : "group"} session is scheduled for ${format(date, "MMMM d, yyyy")} at ${selectedTime}`,
    });
    
    setTimeout(() => {
      setIsBooked(false);
      setStep(1);
      setDate(undefined);
      setSelectedTime(null);
    }, 3000);
  };

  const disabledDays = (day: Date) => {
    return isBefore(day, startOfToday()) || day.getDay() === 0;
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-purple-500/5 to-background relative overflow-hidden" id="booking">
      <AnimatedLines variant="diagonal" color="purple" />
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700",
            headerVisible ? scrollAnimationClasses.fadeUpVisible : scrollAnimationClasses.fadeUp
          )}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip bg-purple-500/10 border-purple-500/20">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-500 text-white mr-2">
                <CalendarIcon className="w-3 h-3" />
              </span>
              <span className="text-purple-500">Book a Session</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Schedule Your Session
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Pick a time that works for you and let's start your learning journey together.
          </p>
        </div>

        <div
          ref={contentRef}
          className={cn(
            "max-w-4xl mx-auto transition-all duration-700",
            contentVisible ? scrollAnimationClasses.fadeUpVisible : scrollAnimationClasses.fadeUp
          )}
        >
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300",
                    step >= s
                      ? "bg-purple-500 text-white"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={cn(
                      "w-12 h-1 rounded-full transition-all duration-300",
                      step > s ? "bg-purple-500" : "bg-secondary"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="bg-card rounded-3xl border border-border shadow-elegant p-6 sm:p-8">
            {/* Success State */}
            {isBooked ? (
              <div className="text-center py-12 animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Session Booked Successfully!
                </h3>
                <p className="text-muted-foreground">
                  Check your email for confirmation details.
                </p>
              </div>
            ) : (
              <>
                {/* Step 1: Select Session Type */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      Choose Session Type
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {sessionTypes.map((session) => {
                        const Icon = session.icon;
                        return (
                          <button
                            key={session.id}
                            onClick={() => setSelectedSession(session.id)}
                            className={cn(
                              "p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:-translate-y-1",
                              selectedSession === session.id
                                ? "border-purple-500 bg-purple-500/5"
                                : "border-border hover:border-purple-500/30"
                            )}
                          >
                            <div className="flex items-start gap-4">
                              <div
                                className={cn(
                                  "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                                  selectedSession === session.id
                                    ? "bg-purple-500 text-white"
                                    : "bg-secondary text-muted-foreground"
                                )}
                              >
                                <Icon className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-foreground mb-1">
                                  {session.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                  {session.description}
                                </p>
                                <div className="flex items-center gap-3 text-sm">
                                  <span className="text-purple-500 font-semibold">
                                    {session.price}
                                  </span>
                                  <span className="text-muted-foreground">
                                    • {session.duration}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <Button
                      onClick={() => setStep(2)}
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white py-6 text-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                )}

                {/* Step 2: Select Date */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-display font-semibold text-foreground">
                        Select a Date
                      </h3>
                      <Button
                        variant="ghost"
                        onClick={() => setStep(1)}
                        className="text-muted-foreground"
                      >
                        Back
                      </Button>
                    </div>
                    
                    <div className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={disabledDays}
                        className="rounded-xl border border-border p-4 pointer-events-auto"
                        classNames={{
                          day_selected: "bg-purple-500 text-white hover:bg-purple-600",
                          day_today: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
                        }}
                      />
                    </div>
                    
                    <Button
                      onClick={() => date && setStep(3)}
                      disabled={!date}
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white py-6 text-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                )}

                {/* Step 3: Select Time */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          Select a Time
                        </h3>
                        {date && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {format(date, "EEEE, MMMM d, yyyy")}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        onClick={() => setStep(2)}
                        className="text-muted-foreground"
                      >
                        Back
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => slot.available && setSelectedTime(slot.time)}
                          disabled={!slot.available}
                          className={cn(
                            "p-4 rounded-xl border-2 text-center transition-all duration-300",
                            !slot.available
                              ? "border-border bg-secondary/50 text-muted-foreground cursor-not-allowed opacity-50"
                              : selectedTime === slot.time
                              ? "border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-400"
                              : "border-border hover:border-purple-500/30 text-foreground"
                          )}
                        >
                          <Clock className="w-4 h-4 mx-auto mb-1" />
                          <span className="text-sm font-medium">{slot.time}</span>
                        </button>
                      ))}
                    </div>
                    
                    {/* Summary */}
                    {selectedTime && (
                      <div className="bg-secondary/50 rounded-2xl p-4 space-y-2">
                        <h4 className="font-semibold text-foreground">Booking Summary</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>
                            <span className="text-foreground font-medium">Session:</span>{" "}
                            {selectedSession === "1on1" ? "1-on-1 Session" : "Group Workshop"}
                          </p>
                          <p>
                            <span className="text-foreground font-medium">Date:</span>{" "}
                            {date && format(date, "MMMM d, yyyy")}
                          </p>
                          <p>
                            <span className="text-foreground font-medium">Time:</span>{" "}
                            {selectedTime}
                          </p>
                          <p>
                            <span className="text-foreground font-medium">Price:</span>{" "}
                            {sessionTypes.find(s => s.id === selectedSession)?.price}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <Button
                      onClick={handleBookSession}
                      disabled={!selectedTime || isBooking}
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white py-6 text-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
                    >
                      {isBooking ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Booking...
                        </>
                      ) : (
                        <>
                          Confirm Booking
                          <CheckCircle2 className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
