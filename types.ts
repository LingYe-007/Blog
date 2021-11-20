export interface IActicle {
  _id?: string;
  title?: string;
  userName?: string;
  content?: string;
  pubulishTime?: string;
  labels?: string[];
  type?: string;
  likes?: number;
  img?: string;
  browseNumber: number;
}

export interface thoughts {
  img: string;
  userName:string;
  personLable:string;
  content:string;
  time:string;
}

export interface openSource {
  id: string;
  image: string;
  title: string;
  introduce: string;
  status: string;
  github?: string;
  preview?: string;
  supplement?: string;
}
