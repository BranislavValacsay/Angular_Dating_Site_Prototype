import { Photo } from './photo'

export interface Member {
    id: number;
    userName: string;
    age: number;
    knownAs?: any;
    created: Date;
    lastActive: Date;
    gender?: any;
    introduction?: any;
    lookingFor?: any;
    interests?: any;
    city?: any;
    country?: any;
    photos: Photo[];
    photoUrl: string;
  }
