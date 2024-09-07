import { NextResponse } from "next/server";

interface IResponseJson {
  data?: any;
  message: string;
  error?: string;
  status: number;
  success?: boolean;
}

export const response = ({
  message,
  error,
  status,
  success,
  data = [],
}: IResponseJson) => {
  return NextResponse.json(
    {
      success,
      message,
      error,
      data,
    },
    { status }
  );
};
