/**
 * @file emolang.ts
 * @description Takrifan bahasa emosi (EmoLang) yang memetakan sentimen kecerdasan buatan
 * kepada transformasi teduh 3D tanah liat bendalir watak RON.
 */

export type EmoLangEmotionToken =
  | 'melahu'        // Idle: gelombang bendalir perlahan, nafas relaks
  | 'ingin_tahu'    // Curious: regangan menegak, sedikit condong
  | 'kegembiraan'   // Joy: riak frekuensi tinggi, pengembangan horizontal
  | 'memproses'     // Processing: vorteks putaran dalaman, zarah pendarfluor
  | 'waspada'       // Alert: ketegangan permukaan memuncak, pantulan tajam
  | 'keliru';       // Confused: riak asimetri dua arah

export interface ShaderFluidParameters {
  viscosity: number;        // Kelikatan cecair (Pa.s)
  surfaceTension: number;   // Tegangan permukaan (N/m)
  refractionIndex: number;  // Indeks biasan kaca cecair (IOR)
  chromaticAberration: number;
  subsurfaceScatteringStrength: number;
}

export interface MorphTargetWeights {
  targetName: string;
  weight: number; // Nilai ternormal antara 0.0 dan 1.0
}

export interface EmoLangFrameState {
  timestampMs: number;
  activeEmotion: EmoLangEmotionToken;
  shaderParameters: ShaderFluidParameters;
  blendshapes: MorphTargetWeights[];
}
