interface User {
  id: string;
  demographic: Demographic;
  demographic_id: string;
  settings: Setting;
  settings_id: string;
  navigationSettings: NavigationSetting;
  navigationSettings_id: string;
  email: string;
  provider: 'google' | 'apple';
  sessions: string[];
  created_at: number;

  chats?: Chat[];
  locations?: Location[];
}
