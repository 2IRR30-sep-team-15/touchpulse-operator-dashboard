"use client";
import { useState } from "react";

export default function Call() {
    {/* Visibility of green line on top */}
    const [visibleLine, setVisibleLine] = useState(false);
    
    {/* Visibility of incoming call window (initially, there is an incoming call) */}
    const [visibleIncoming, setVisibleIncoming] = useState(true);

    {/* Name has to be selected from the database later */}
    const callerName = "User Name";

    {/* Time has to be obtained from open socket */}
    const time = "0:00";

    const handleEnd = () => {
        setVisibleLine(false);
    }

    const handleAccept = () => {
        setVisibleIncoming(false);
        setVisibleLine(true);
    };

    const handleDecline = () => {
        setVisibleIncoming(false);
    };
    
    return(
        <div className="w-screen h-screen flex items-center justify-center">
            {/* Green line with call information and control */}
            {visibleLine && (
                <div className="fixed top-0 left-0 w-screen bg-green-600 flex items-center px-4 py-2">
                    <div className="flex-1 flex justify-center items-center gap-4">
                        <span className="text-white">Call in progress:</span>
                        <span className="text-white font-semibold">{callerName}</span>
                        <span className="text-white flex items-center gap-2">
                            <img src="clock.png"></img>
                            <span className="font-medium">{time}</span>
                        </span>
                    </div>
                    <div className="flex-none ml-auto">
                        <button
                            className="text-white px-3 py-1 rounded hover:bg-red-700 transition"
                            onClick={handleEnd}
                        >
                            End
                        </button>
                    </div>
                </div>
            )}

            {/* Incoming Call window */}
            {visibleIncoming && (
            <div className="bg-white shadow-2xl rounded-2xl p-4 flex flex-col items-center w-72 animate-fade-in">
                <p className="text-black font-semibold">Incoming Call</p>
                <p className="text-black font-bold text-3xl mb-6">{callerName}</p>
                <div className="flex gap-4">
                    <button
                    onClick={handleAccept}
                    className="text-white px-4 py-2 rounded-xl hover:bg-black transition"
                    style= {{ background: '#0d1e2e' }}
                    >
                        Accept
                    </button>
                    <button
                    onClick={handleDecline}
                    className="text-white px-4 py-2 rounded-xl hover:bg-black transition"
                    style= {{ background: '#0d1e2e' }}
                    >
                        Decline
                    </button>
                </div>
            </div>
            )}
        </div>
    )
}
