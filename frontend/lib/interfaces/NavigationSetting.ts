interface NavigationSetting {
  id: string;
  user_id: string;
  walking_finalDistance: number;
  walking_stepDistances: number[];
  walking_meterDistances: number[];
  walking_ignoreInstructionStepDistance: number;
  walking_meterDistanceWhenMistake: number;
  walking_meterDistanceWhenRecalculate: number;
  transit_enabled: boolean;
  transit_instructionAtMeterFromEndStation: number[];
  transit_instructionAtMeterFromStartStation: number[];
  transit_instructionAtTimeFromEndStation: number[];
  transit_instructionAtTimeFromStartStation: number[];
  checkpoint_close_more: boolean;
  checkpoint_tilt_phone: boolean;
  help_reminders_enabled: boolean;
  shake_instruction_enabled: boolean;
  created_at: number;
}
