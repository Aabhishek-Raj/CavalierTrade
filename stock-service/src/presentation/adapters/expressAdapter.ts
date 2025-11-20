import { Request, Response } from "express";

export const expressAdapter = (controller: any) => {
  return async (req: Request, res: Response) => {
    try {
      const httpResponse = await controller({ body: req.body });
      res.status(httpResponse.statusCode || 200).json(httpResponse.body);
    } catch (err: any) {
        // if (err.name === "ValidationError") {
        // return res.status(400).json({ error: err.message });
        // }

      res.status(500).json({ error: err.message || "Something went wrong" });
    }
  };
};
