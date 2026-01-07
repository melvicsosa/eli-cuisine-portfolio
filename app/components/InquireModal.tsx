"use client";
import React, { useEffect, useRef, useActionState } from 'react';
import { X, ArrowRight, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { INQUIRE_MODAL_CONTENT } from '../data/sections';
import { submitInquiry } from '../actions';

const initialState = {
  success: false,
  message: '',
};

export const InquireModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const modalRef = useRef(null);
  const formRef = useRef(null);
  const [state, formAction, isPending] = useActionState(submitInquiry, initialState);

  useEffect(() => {
    if (state.success) {
      alert(state.message);
      onClose();
    }
  }, [state, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    // Animation when modal opens
    const ctx = gsap.context(() => {
      gsap.fromTo(modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(formRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, delay: 0.1, ease: "back.out(1.2)" }
      );
    });

    return () => ctx.revert();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        ref={modalRef}
        onClick={onClose}
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <div
        ref={formRef}
        className="relative bg-ivory w-full max-w-lg p-8 md:p-12 shadow-2xl border-t-4 border-gold"
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-6 right-6 text-primary/50 hover:text-primary transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">
            {INQUIRE_MODAL_CONTENT.subtitle}
          </span>
          <h3 className="font-serif text-3xl mt-2 text-primary">{INQUIRE_MODAL_CONTENT.title}</h3>
        </div>

        <form action={formAction} className="space-y-6">
          <div className="space-y-1">
            <label className="text-xs uppercase font-bold tracking-widest text-primary/60">{INQUIRE_MODAL_CONTENT.form.nameLabel}</label>
            <input required name="name" type="text" className="w-full bg-transparent border-b border-primary/20 py-2 text-primary focus:border-gold focus:outline-none transition-colors font-serif" placeholder={INQUIRE_MODAL_CONTENT.form.namePlaceholder} />
          </div>

          <div className="space-y-1">
            <label className="text-xs uppercase font-bold tracking-widest text-primary/60">{INQUIRE_MODAL_CONTENT.form.emailLabel}</label>
            <input required name="email" type="email" className="w-full bg-transparent border-b border-primary/20 py-2 text-primary focus:border-gold focus:outline-none transition-colors font-serif" placeholder={INQUIRE_MODAL_CONTENT.form.emailPlaceholder} />
          </div>

          <div className="space-y-1">
            <label className="text-xs uppercase font-bold tracking-widest text-primary/60">{INQUIRE_MODAL_CONTENT.form.purposeLabel}</label>
            <div className="relative">
              <select required name="purpose" className="w-full bg-transparent border-b border-primary/20 py-2 text-primary focus:border-gold focus:outline-none transition-colors font-serif appearance-none cursor-pointer">
                <option value="" disabled selected>{INQUIRE_MODAL_CONTENT.form.purposePlaceholder}</option>
                {INQUIRE_MODAL_CONTENT.form.purposeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs uppercase font-bold tracking-widest text-primary/60">{INQUIRE_MODAL_CONTENT.form.messageLabel}</label>
            <textarea required name="message" rows={3} className="w-full bg-transparent border-b border-primary/20 py-2 text-primary focus:border-gold focus:outline-none transition-colors font-serif resize-none" placeholder={INQUIRE_MODAL_CONTENT.form.messagePlaceholder}></textarea>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="cursor-pointer w-full bg-primary text-ivory py-4 text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-primary transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                SENDING...
              </>
            ) : (
              INQUIRE_MODAL_CONTENT.form.submitButton
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
