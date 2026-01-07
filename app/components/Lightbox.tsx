"use client";
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    children: React.ReactNode;
}

/**
 * Shared Lightbox component for displaying media in a full-screen overlay.
 * Handles locking body scroll, keyboard navigation (Esc, Left, Right), and mobile controls.
 */
export const Lightbox = ({ isOpen, onClose, onNext, onPrev, children }: LightboxProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onNext, onPrev]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={onClose}
        >
            <button
                className="cursor-pointer absolute top-6 right-6 text-ivory/50 hover:text-ivory transition-colors p-2 z-50"
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                aria-label="Close lightbox"
            >
                <X className="w-8 h-8" />
            </button>

            <button
                className="cursor-pointer absolute left-4 md:left-8 text-ivory/50 hover:text-ivory transition-colors p-2 hidden md:block z-50"
                onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                }}
                aria-label="Previous image"
            >
                <ChevronLeft className="w-12 h-12" />
            </button>

            <button
                className="cursor-pointer absolute right-4 md:right-8 text-ivory/50 hover:text-ivory transition-colors p-2 hidden md:block z-50"
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
                aria-label="Next image"
            >
                <ChevronRight className="w-12 h-12" />
            </button>

            {/* Content Container - Stops propagation so clicks inside don't close */}
            <div
                className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center p-2"
                onClick={(e) => e.stopPropagation()}
            >
                {children}

                {/* Mobile Controls */}
                <div className="absolute bottom-[-3rem] flex gap-8 md:hidden">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrev();
                        }}
                        className="cursor-pointer text-ivory"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        className="cursor-pointer text-ivory"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </div>
    );
};
