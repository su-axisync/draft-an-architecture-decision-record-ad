/**
 * @file utility.ts
 * @description Takrifan struktur data bagi fungsi seret & lepas Pulau Terapung,
 * merangkumi penghantaran AirDrop/Bluetooth dan enjin penukaran fail sejagat.
 */

export type TransferProtocol = 'airdrop_apple' | 'bluetooth_obex' | 'localsend_p2p';

export interface DeviceReceiverContact {
  id: string;
  name: string;
  deviceType: 'macbook' | 'pc_windows' | 'android_mobile' | 'iphone_ipad' | 'linux_workstation';
  preferredProtocol: TransferProtocol;
  bluetoothMacAddress?: string;
  networkIpAddress?: string;
}

export interface FilePayload {
  fileName: string;
  fileSizeBytes: number;
  mimeType: string;
  absolutePath: string;
}

export type SupportedTargetFormat =
  // Format Imej
  | 'png' | 'jpeg' | 'webp' | 'svg' | 'avif' | 'ico'
  // Format Video & Animasi
  | 'mp4' | 'webm' | 'gif' | 'mov'
  // Format Audio
  | 'mp3' | 'wav' | 'aac' | 'ogg' | 'flac'
  // Format Dokumen
  | 'pdf' | 'docx' | 'markdown' | 'txt' | 'html';

export interface ConversionJob {
  jobId: string;
  sourceFile: FilePayload;
  targetFormat: SupportedTargetFormat;
  qualityLevel?: number; // 1 - 100
  outputDirectoryPath: string;
}

export interface ConversionProgress {
  jobId: string;
  progressPercent: number; // 0.0 - 100.0
  status: 'sedang_memproses' | 'selesai' | 'gagal';
  errorMessage?: string;
  destinationFilePath?: string;
}
