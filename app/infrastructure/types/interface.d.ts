export interface CatsDataTransformed extends ImageDataRequest {
  description: string;
  isPathway: boolean;
}

export interface ImageDataRequest {
  id: string;
  url: string;
  width: number;
  height: number;
  original_filename: string;
  pending: number;
  approved: number;
}
