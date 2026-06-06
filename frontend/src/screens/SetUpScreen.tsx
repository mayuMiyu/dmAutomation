import { useNavigate } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MessageSquare, Copy, Cat, Settings, Play, Square, Activity, Sparkles, Heart, Palette, ArrowLeft, Trash2, Edit2 } from "lucide-react";
import { useTheme } from "../context/themeContext";

export function SetupScreen() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isMinimal = theme === "minimal";
  const [chatId, setChatId] = useState("");

  const steps = [
    { icon: Send, text: "Open Telegram" },
    { icon: MessageSquare, text: "Message @DMMonitorBot and send /register" },
    { icon: Copy, text: "Copy your Chat ID" },
  ];

  return (
    <div className="flex-1 flex flex-col p-8 h-full relative z-10">
      <div className="flex-1 flex flex-col w-full mx-auto pb-4">
        <div className="mb-10 pt-4 text-center">
          {!isMinimal && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.6 }}
              className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-md shadow-pink-200"
            >
              <Cat className="w-8 h-8 text-pink-400" />
            </motion.div>
          )}
          <h1 className={`text-2xl font-semibold mb-2 tracking-tight ${
            isMinimal ? "text-white text-left" : "text-purple-800 font-bold"
          }`}>DM Monitor Setup</h1>
          <p className={`text-sm ${isMinimal ? "text-neutral-400 text-left" : "text-pink-600 font-medium"}`}>
            Link your Telegram to receive notifications
          </p>
        </div>

        <div className="space-y-3 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`flex items-center gap-4 p-4 ${
                isMinimal
                  ? "bg-neutral-900/50 border border-neutral-800 rounded-xl"
                  : "bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl shadow-sm"
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                isMinimal ? "bg-neutral-800 text-neutral-300" : "bg-pink-100 text-pink-500 rounded-full"
              }`}>
                <step.icon className="w-4 h-4" />
              </div>
              <p className={`text-sm font-medium ${isMinimal ? "text-neutral-200" : "text-purple-700"}`}>
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-auto" />

        <div className="mb-6">
          <label className={`block text-xs font-medium mb-2 ${
            isMinimal ? "text-neutral-400" : "text-purple-500 ml-2"
          }`}>Paste Chat ID here</label>
          <input
            type="text"
            value={chatId}
            onChange={(e) => setChatId(e.target.value)}
            placeholder="e.g. 123456789"
            className={`w-full px-4 py-3 outline-none transition-colors text-sm ${
              isMinimal
                ? "bg-neutral-900/50 text-white border border-neutral-800 focus:border-neutral-500 rounded-xl"
                : "bg-white text-purple-800 border-2 border-pink-100 focus:border-pink-300 rounded-2xl placeholder:text-pink-300 shadow-sm"
            }`}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/dashboard")}
          className={`w-full font-semibold text-sm py-3.5 flex items-center justify-center transition-all ${
            isMinimal
              ? "bg-white text-black hover:bg-neutral-200 rounded-xl"
              : "bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full shadow-lg shadow-pink-300/50"
          }`}
        >
          Verify & Save
        </motion.button>
      </div>
    </div>
  );
}