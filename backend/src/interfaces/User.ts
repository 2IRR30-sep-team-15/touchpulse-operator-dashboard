import { Entity } from 'redis-om';
import { Demographic } from './Demographic';
import { Setting } from './Setting';
import { NavigationSetting } from './NavigationSetting';

export interface User extends Entity {
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
}
