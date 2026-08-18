"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/ui";

const steps = [
  {
    number: "01",
    label: "START",
    title: "Create your project",
    description:
      "Tell BuildOS what you're building and organize your requirements. Define scope, set milestones, and invite your team.",
  },
  {
    number: "02",
    label: "SOURCE",
    title: "Find what you need",
    description:
      "Source materials, services and workforce from the connected marketplace. Compare quotes, check availability, and place orders.",
  },
  {
    number: "03",
    label: "MOVE",
    title: "Coordinate delivery",
    description:
      "Track your orders and coordinate delivery to the project location. Get real‑time updates and manage logistics.",
  },
  {
    number: "04",
    label: "BUILD",
    title: "Build with confidence",
    description:
      "Track milestones, payments and project activity from one workspace. Stay aligned with your team and stakeholders.",
  },
];

export function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = steps.length;
  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;

  const goToStep = useCallback((index: number) => {
    if (index >= 0 && index < totalSteps) {
      setCurrentStep(index);
    }
  }, [totalSteps]);

  const goNext = useCallback(() => {
    if (!isLast) setCurrentStep((prev) => prev + 1);
  }, [isLast]);

  const goPrev = useCallback(() => {
    if (!isFirst) setCurrentStep((prev) => prev - 1);
  }, [isFirst]);

  return (
    <section id="how-it-works" className="landing-section landing-how">
      <Container>
        {/* Intro */}
        <div className="landing-how__intro">
          <span className="landing-kicker">HOW IT WORKS</span>
          <h2 className="landing-section__title landing-how__title">
            From idea
            <span> to completion.</span>
          </h2>
          <p className="landing-section__description landing-how__description">
            One connected workflow for planning, sourcing, delivery and
            construction.
          </p>
        </div>

        {/* Stepper */}
        <div className="how-stepper">
          {/* Step indicators (dots with numbers) */}
          <div className="how-stepper__indicators" role="tablist">
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              return (
                <button
                  key={step.number}
                  className={`how-stepper__dot ${
                    isActive ? "how-stepper__dot--active" : ""
                  } ${isCompleted ? "how-stepper__dot--completed" : ""}`}
                  onClick={() => goToStep(index)}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Step ${index + 1}: ${step.title}`}
                >
                  <span className="how-stepper__dot-number">{index + 1}</span>
                  <span className="how-stepper__dot-label">{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="how-stepper__progress" aria-hidden="true">
            <div
              className="how-stepper__progress-fill"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>

          {/* Current step content */}
          <div className="how-stepper__content">
            <div className="how-stepper__card" key={currentStep}>
              <span className="how-stepper__step-number">
                Step {currentStep + 1} of {totalSteps}
              </span>
              <h3>{steps[currentStep].title}</h3>
              <p>{steps[currentStep].description}</p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="how-stepper__nav">
            <button
              type="button"
              className="how-stepper__nav-btn how-stepper__nav-btn--prev"
              onClick={goPrev}
              disabled={isFirst}
              aria-label="Previous step"
            >
              ← Back
            </button>
            <button
              type="button"
              className="how-stepper__nav-btn how-stepper__nav-btn--next"
              onClick={goNext}
              disabled={isLast}
              aria-label="Next step"
            >
              {isLast ? "Done" : "Next →"}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}