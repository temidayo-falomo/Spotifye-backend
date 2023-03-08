import { Request, Response } from "express";
export declare const newPlaylist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getPlaylist: (req: Request, res: Response) => Promise<void | Response<any, Record<string, any>>>;
export declare const getAllPlaylists: (req: Request, res: Response) => Promise<void | Response<any, Record<string, any>>>;
export declare const addSongToPlaylist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const removeSongFromPlaylist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deletePlaylist: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getUserPlaylist: (req: Request, res: Response) => Promise<void | Response<any, Record<string, any>>>;
