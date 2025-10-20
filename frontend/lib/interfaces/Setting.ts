interface Setting {
  id: string;
  user_id: string;
  nickname?: string;
  language: string;
  addresses: Record<string, string>;
  speech_rate: number;
  step_size: number;
  operation_selection: string;
  audio_output_earphone: boolean;
  units: string;
  created_at: number;
}
