
export interface PermissionInfo {
  id: string;
  name: string;
  icon: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  description: string;
  maliciousUse: string;
  safeUse: string;
}

export interface SecurityTip {
  id: number;
  title: string;
  content: string;
  category: 'Privacy' | 'Security' | 'Legality';
}
