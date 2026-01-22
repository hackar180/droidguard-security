
import { PermissionInfo, SecurityTip } from './types';

export const PERMISSIONS: PermissionInfo[] = [
  {
    id: 'location',
    name: 'GPS / Location',
    icon: 'fa-location-dot',
    riskLevel: 'High',
    description: 'Allows an app to track your physical movements in real-time.',
    maliciousUse: 'Used by stalkerware to monitor a victim\'s whereabouts without their consent.',
    safeUse: 'Used by maps, ride-sharing, and local weather services to provide relevant information.'
  },
  {
    id: 'contacts',
    name: 'Contacts',
    icon: 'fa-address-book',
    riskLevel: 'Medium',
    description: 'Grants access to your address book, including names, numbers, and emails.',
    maliciousUse: 'Data harvesting for spam, social engineering, or mapping a user\'s social graph for extortion.',
    safeUse: 'Social apps used to find friends or messaging apps for communication.'
  },
  {
    id: 'sms',
    name: 'SMS / Messages',
    icon: 'fa-comment-sms',
    riskLevel: 'Critical',
    description: 'Allows an app to read, send, and receive text messages.',
    maliciousUse: 'Intercepting 2FA codes for bank accounts, or sending premium-rate SMS without the user knowing.',
    safeUse: 'Auto-filling verification codes (though modern APIs exist for this without full SMS access).'
  },
  {
    id: 'camera',
    name: 'Camera',
    icon: 'fa-camera',
    riskLevel: 'High',
    description: 'Allows an app to take photos or record videos.',
    maliciousUse: 'Silent recording or capturing images for blackmail or surveillance.',
    safeUse: 'Video conferencing, social media, and QR code scanning.'
  }
];

export const SECURITY_TIPS: SecurityTip[] = [
  {
    id: 1,
    category: 'Privacy',
    title: 'Background Data Collection',
    content: 'Apps that collect data in the background without a clear user benefit are often categorized as Spyware or Stalkerware.'
  },
  {
    id: 2,
    category: 'Legality',
    title: 'Authorized Use Only',
    content: 'Developing software to exfiltrate data from a device without the owner\'s explicit and informed consent is illegal in most jurisdictions.'
  },
  {
    id: 3,
    category: 'Security',
    title: 'Software Licensing',
    content: 'Bypassing IDE licenses (like AIDE premium) or using "cracked" versions of software can introduce malware into your own development environment.'
  }
];
