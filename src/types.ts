/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LeadSubmission {
  id: string;
  timestamp: string;
  // Step 1
  name: string;
  email: string;
  phone: string;
  // Step 2
  companyName: string;
  companyPurpose: string;
  // Step 3
  biggestChallenge: string;
  weeklyWastedHours: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  miniTitle: string;
  outcome: string;
  description: string;
  features: string[];
  savingPercent: string;
  badge: string;
}

export interface DashboardMockup {
  id: string;
  name: string;
  status: 'active' | 'synced' | 'tuning';
  metrics: { label: string; value: string; trend: string; isPositive: boolean }[];
  logs: { time: string; event: string; status: 'ok' | 'warn' | 'info' }[];
}
