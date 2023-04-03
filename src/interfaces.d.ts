/**
 * Global interfaces
 */

import { twelveHrTime } from '@/types';
import { Track } from './services/spotify.service';

export interface AlarmInterface extends twelveHrTime {
  active: boolean;
  key: string;
}

export interface SettingsInterface {
  [key: string]: any;
  volumeStyle: string;
  maxVolume: number;
  connectedMusicAccounts: Array<string>;
  deviceSaved: string;
  trackkIndexSaved: number;
  track: Track;
}

export interface MusicAccount {
  accountName: string;
  accountIconUri: any;
  available: boolean;
  connected: boolean;
}
