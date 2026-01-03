"use client";

import { useState } from "react";
import Link from "next/link";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  options?: string[];
}

interface ConversationStep {
  id: string;
  question: string;
  options: string[];
  nextStep?: Record<string, string>;
}

const conversationFlow: ConversationStep[] = [
  {
    id: "welcome",
    question: "What brings you to Heritage today?",
    options: ["Planning a meal", "Looking for an event venue", "Just browsing"],
    nextStep: {
      "Planning a meal": "occasion",
      "Looking for an event venue": "event-type",
      "Just browsing": "goodbye",
    },
  },
  {
    id: "occasion",
    question: "What's the occasion?",
    options: ["Casual catch-up", "Romantic date", "Family gathering", "Business meeting"],
    nextStep: {
      "Casual catch-up": "time",
      "Romantic date": "time",
      "Family gathering": "time",
      "Business meeting": "time",
    },
  },
  {
    id: "event-type",
    question: "What type of event are you planning?",
    options: ["Wedding", "Corporate event", "Private party", "Community event"],
    nextStep: {
      Wedding: "event-time",
      "Corporate event": "event-time",
      "Private party": "event-time",
      "Community event": "event-time",
    },
  },
  {
    id: "time",
    question: "When are you thinking?",
    options: ["Morning / Breakfast", "Afternoon / Lunch", "Evening / Dinner", "Weekend special"],
    nextStep: {},
  },
  {
    id: "event-time",
    question: "When is your event?",
    options: ["This month", "Next month", "In 3-6 months", "Just exploring"],
    nextStep: {},
  },
];

const recommendations: Record<string, string> = {
  "Casual catch-up-Morning / Breakfast":
    "Perfect! Our Highland Breakfast offers stunning sunrise views. I recommend our Nasi Goreng Heritage or fresh coffee on the terrace.",
  "Casual catch-up-Afternoon / Lunch":
    "Great choice! Our Casual Lunch menu features light bites in a sunlit setting. Try our Gado-Gado Jakarta or Lumpia Semarang.",
  "Casual catch-up-Evening / Dinner":
    "Wonderful! For a casual evening, our Modern Plates offer contemporary flavors. The Mie Goreng Seafood is a crowd favorite.",
  "Romantic date-Morning / Breakfast":
    "A romantic breakfast! Start with our Highland Breakfast and enjoy the peaceful morning views together.",
  "Romantic date-Afternoon / Lunch":
    "Lovely! Our Romantic Lunch offers a quiet, intimate atmosphere. The Bebek Betutu is perfect for sharing.",
  "Romantic date-Evening / Dinner":
    "Perfect! Our Romantic Dinner experience features candlelit tables with panoramic city lights. I recommend the Rendang Wagyu for two.",
  "Family gathering-Morning / Breakfast":
    "Family breakfast is special! Our spacious seating accommodates groups. The Nasi Goreng Heritage is perfect for sharing.",
  "Family gathering-Afternoon / Lunch":
    "Great for families! Our Family Gathering menu has options for everyone. Try our Iga Bakar Madu - kids love it!",
  "Family gathering-Evening / Dinner":
    "Family dinners are memorable here! Our warm atmosphere is perfect for multi-generational meals. The Gurame Asam Manis feeds the whole family.",
  "Business meeting-Morning / Breakfast":
    "Impressive! Our Corporate Breakfast offers a professional yet relaxed setting. Perfect for client meetings.",
  "Business meeting-Afternoon / Lunch":
    "Excellent choice! Our Corporate Lunch menu features sophisticated dishes. The Sop Buntut is a signature favorite.",
  "Business meeting-Evening / Dinner":
    "Great for business! Our Corporate Dinner offers an elegant atmosphere. The Rendang Wagyu makes a strong impression.",
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [userSelections, setUserSelections] = useState<string[]>([]);

  const handleStart = () => {
    setIsOpen(true);
    setMessages([
      {
        id: "1",
        type: "assistant",
        content: "Hi! I'm your Heritage dining assistant. I'd love to help you find your perfect moment.",
      },
    ]);
    setCurrentStep("welcome");
    setUserSelections([]);
  };

  const handleOptionClick = (option: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: option,
    };
    setMessages((prev) => [...prev, userMessage]);

    // Track selections
    setUserSelections((prev) => [...prev, option]);

    // Find current step
    const step = conversationFlow.find((s) => s.id === currentStep);
    if (!step) return;

    // Determine next step
    const nextStepId = step.nextStep?.[option];
    
    if (nextStepId === "goodbye") {
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            type: "assistant",
            content:
              "Feel free to explore our menu, gallery, or moments. We hope to see you soon at Heritage!",
          },
        ]);
        setIsTyping(false);
        setCurrentStep(null);
      }, 1000);
      return;
    }

    if (nextStepId) {
      // Show typing indicator
      setIsTyping(true);
      setTimeout(() => {
        const nextStep = conversationFlow.find((s) => s.id === nextStepId);
        if (nextStep) {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              type: "assistant",
              content: nextStep.question,
              options: nextStep.options,
            },
          ]);
          setCurrentStep(nextStepId);
        }
        setIsTyping(false);
      }, 800);
    } else {
      // Show recommendation
      setIsTyping(true);
      setTimeout(() => {
        const key = userSelections.join("-");
        const recommendation = recommendations[key] || 
          "Based on your preferences, I recommend exploring our Dining Moments section or contacting us for personalized recommendations.";
        
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            type: "assistant",
            content: recommendation,
          },
        ]);
        setIsTyping(false);
        setCurrentStep(null);
      }, 1200);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "1",
        type: "assistant",
        content: "Hi! I'm your Heritage dining assistant. I'd love to help you find your perfect moment.",
      },
    ]);
    setCurrentStep("welcome");
    setUserSelections([]);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={handleStart}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-heritage-gold hover:bg-sunset-amber text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Open AI Assistant"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-40 w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-forest-deep p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-heritage-gold rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🤖</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-white font-semibold">
                  Heritage Assistant
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-white/70 text-xs">
                  Find your perfect moment
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 bg-cream-warm space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    message.type === "user"
                      ? "bg-heritage-gold text-white rounded-br-md"
                      : "bg-white text-forest-deep rounded-bl-md shadow-sm"
                  }`}
                >
                  <p className="font-[family-name:var(--font-lato)] text-sm leading-relaxed">
                    {message.content}
                  </p>
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(option)}
                          className="w-full text-left px-3 py-2 bg-forest-deep/5 hover:bg-forest-deep/10 rounded-lg text-xs font-[family-name:var(--font-lato)] transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-forest-deep/40 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-forest-deep/40 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-forest-deep/40 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-white p-4 border-t border-forest-deep/10">
            {currentStep === null && (
              <div className="flex gap-2">
                <button
                  onClick={handleReset}
                  className="flex-1 font-[family-name:var(--font-lato)] px-4 py-2 bg-forest-deep/5 hover:bg-forest-deep/10 rounded-lg text-xs text-forest-deep transition-colors"
                >
                  Start Over
                </button>
                <Link
                  href="#reservation"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 font-[family-name:var(--font-lato)] px-4 py-2 bg-heritage-gold hover:bg-sunset-amber rounded-lg text-xs text-white text-center transition-colors"
                >
                  Make Reservation
                </Link>
              </div>
            )}
            <p className="font-[family-name:var(--font-lato)] text-forest-deep/50 text-xs text-center">
              Powered by Heritage Cafe & Resto
            </p>
          </div>
        </div>
      )}
    </>
  );
}
