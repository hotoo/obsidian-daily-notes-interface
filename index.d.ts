import type { Moment } from "moment";
import { TFile } from "obsidian";

export as namespace dailyNotes;

export interface IDailyNoteSettings {
  folder?: string;
  format?: string;
  template?: string;
}

export function appHasDailyNotesPluginLoaded(): IDailyNoteSettings;
export function createDailyNote(date: Moment): Promise<TFile>;
export function getDailyNote(date: Moment): TFile | null;
export function getTemplateContents(template: string): Promise<string>;
