import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; 
import { Mic, MicOff, PhoneOff, PhoneCall } from 'lucide-react';

// Simplified type for the component's state
type ControlState = {
    isMuted: boolean;
    isCalling: boolean;
};

export default function CallTab() {
    const [controls, setControls] = useState<ControlState>({
        isMuted: false,
        isCalling: false,
    });

    // Unified toggle function
    const toggleControl = (key: 'isMuted') => {
        setControls(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleEndCall = () => {
        setControls(prev => ({ ...prev, isCalling: false }));
        console.log("Call Ended.");
    };

    const handleStartCall = () => {
        setControls(prev => ({ ...prev, isCalling: true }));
        console.log("Call Initiated.");
    };

    // Derived values for the primary call button
    const PrimaryCallButtonIcon = controls.isCalling ? PhoneOff : PhoneCall;
    const PrimaryCallButtonLabel = controls.isCalling ? 'End Call' : 'Call';
    const PrimaryCallButtonClasses = controls.isCalling 
        ? 'bg-red-600 hover:bg-red-700' 
        : 'bg-green-600 hover:bg-green-700';
    const PrimaryCallButtonHandler = controls.isCalling ? handleEndCall : handleStartCall;

    return (
        <div className="flex flex-col w-full h-full p-4 space-y-4 dark:bg-gray-900 dark:text-white"> 
            
            {/* 1. Video Display Area (Vertical 3:4 Aspect Ratio) */}
            <div className="flex justify-center w-full flex-grow">
                <div 
                    className="w-full bg-black/80 rounded-2xl relative overflow-hidden shadow-2xl"
                    style={{ aspectRatio: '3 / 4'}}
                >
                    <div className="flex flex-col items-center justify-center h-full text-white/30">
                        <div className="w-20 h-20 rounded-full bg-gray-700 mb-2 animate-pulse"></div>
                        <p className="text-sm mt-1">Simulating live video feed...</p>
                    </div>
                        
                    {/* Status Overlay */}
                    <div className="absolute top-4 left-4 text-white text-lg font-semibold bg-black/30 px-3 py-1 rounded-lg">
                        {controls.isCalling ? 'Call Active' : 'Idle'}
                    </div>
                </div>
            </div>

            {/* 2. Controls Area */}
            <div className="flex justify-around items-center">
                
                {/* Mute/Unmute Button (Uses custom classes for the vertical stack look) */}
                <Button
                    onClick={() => toggleControl('isMuted')}
                    aria-label={controls.isMuted ? 'Unmute' : 'Mute'}
                    // Applying the required custom vertical layout and sizing classes
                    className={`flex flex-col items-center justify-center rounded-xl transition-all duration-200 
                                shadow-lg font-semibold text-xs sm:text-sm w-full max-w-[80px] h-16 sm:h-20
                                ${controls.isMuted 
                                    ? 'bg-red-500 hover:bg-red-600' 
                                    : 'bg-gray-700/50 hover:bg-gray-600/50'}
                                `}
                >
                    {controls.isMuted ? (
                        <MicOff className="w-6 h-6 mb-1" />
                    ) : (
                        <Mic className="w-6 h-6 mb-1" />
                    )}
                    <span className="hidden sm:inline">
                        {controls.isMuted ? 'Unmute' : 'Mute'}
                    </span>
                </Button>

                {/* Primary Action Button (End/Start Call) */}
                <Button
                    onClick={PrimaryCallButtonHandler}
                    aria-label={PrimaryCallButtonLabel}
                    // Applying the required custom vertical layout and sizing classes
                    className={`flex flex-col items-center justify-center rounded-xl transition-all duration-200 
                                ${PrimaryCallButtonClasses} shadow-xl font-bold text-xs sm:text-sm 
                                w-full max-w-[80px] h-16 sm:h-20`}
                >
                    <PrimaryCallButtonIcon className="w-6 h-6 mb-1" /> 
                    <span className="hidden sm:inline">{PrimaryCallButtonLabel}</span>
                </Button>
            </div>
        </div>
    );
}