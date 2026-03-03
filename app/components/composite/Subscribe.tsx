import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Mail } from "lucide-react";

export default function Subscribe() {
  // State pour l'email
  const [email, setEmail] = useState("");
  // State pour désactiver le bouton
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State pour afficher le message
  const [message, setMessage] = useState("");

  // Fonction pour gérer le submit
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("✓ Subscribed successfully!");
      setEmail("");
    } catch (_error) {
      setMessage("✗ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2  px-4 pb-8 lg:pb-16 border-b border-[#394A5A]">
      <p className="text-2xl md:text-3xl lg:text-4xl text-neutral-light font-bold capitalize">
        Hey there, <br /> Free trial now{" "}
      </p>
      {/* formualaire */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 ">
          {/* input  */}
          <div className="relative w-full sm:w-auto flex-1">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Mail size={20} color="white" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" w-full pl-12 pr-4 py-4 bg-transparent border border-[#254461] rounded-full placeholder:text-neutral-dark focus:outline-none focus:border-primary transition-colors duration-200"
              placeholder="Enter your email"
            />
          </div>
          {/* Bouton */}
          {/* <div className=""> */}
          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
            className=""
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              "Try demo"
            )}
          </Button>
          {/* </div> */}
        </div>
        {/* Affichage du message de succès ou d'échec */}
        {message && (
          <p
            className={`mt-4 md:mt-6 text-sm text-center ${
              message.includes("✗") ? "text-red-400" : ""
            } `}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
