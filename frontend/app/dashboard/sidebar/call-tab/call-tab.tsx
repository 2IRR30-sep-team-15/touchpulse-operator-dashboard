import React, { useState } from 'react';
import { Mic, MicOff, PhoneOff, PhoneCall } from 'lucide-react'; // Cleaned up imports

// Simplified type for the component's state
type ControlState = {
    isMuted: boolean;
    isCalling: boolean;
};

// --- Control Button Component ---
interface ControlButtonProps {
    icon: React.ElementType;
    label: string;
    isActive: boolean;
    onClick: () => void;
    colorClasses: string;
}

const ControlButton: React.FC<ControlButtonProps> = ({ icon: Icon, label, isActive, onClick, colorClasses }) => (
    <button
        onClick={onClick}
        className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl transition-all duration-200
                   ${isActive ? colorClasses : 'bg-gray-700/50 hover:bg-gray-600/50'}
                   shadow-lg text-white font-semibold text-xs sm:text-sm w-full h-16 sm:h-20 max-w-[80px]`}
        aria-label={label}
    >
        <Icon className="w-6 h-6 mb-1" />
        <span className="hidden sm:inline">{label}</span>
    </button>
);


export default function CallTab() {
    const [controls, setControls] = useState<ControlState>({
        isMuted: false,
        isCalling: false,
    });

    // Toggle function simplified to only target 'isMuted'
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


    // Determine primary action button style and handler
    const PrimaryCallButtonIcon = controls.isCalling ? PhoneOff : PhoneCall;
    const PrimaryCallButtonLabel = controls.isCalling ? 'End Call' : 'Call';
    const PrimaryCallButtonClasses = controls.isCalling ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700';
    const PrimaryCallButtonHandler = controls.isCalling ? handleEndCall : handleStartCall;


    return (
        // I've re-added 'p-4' here for better alignment inside the sidebar
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
                
                {/* Mute/Unmute */}
                <ControlButton
                    icon={controls.isMuted ? MicOff : Mic}
                    label={controls.isMuted ? 'Unmute' : 'Mute'}
                    isActive={controls.isMuted}
                    onClick={() => toggleControl('isMuted')}
                    colorClasses="bg-red-500 hover:bg-red-600"
                />

                {/* Primary Action Button (End/Start Call) */}
                <button
                    onClick={PrimaryCallButtonHandler}
                    className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl transition-all duration-200 
                                ${PrimaryCallButtonClasses} shadow-xl text-white font-bold text-xs sm:text-sm w-full h-16 sm:h-20 max-w-[80px]`}
                    aria-label={PrimaryCallButtonLabel}
                >
                    {/* Fix: Changed h-3 to h-6 for correct icon size */}
                    <PrimaryCallButtonIcon className="w-6 h-6 mb-1" /> 
                    <span className="hidden sm:inline">{PrimaryCallButtonLabel}</span>
                </button>
            </div>
        </div>
    );
}
