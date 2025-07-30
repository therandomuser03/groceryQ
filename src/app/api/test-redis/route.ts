import redis from '@/lib/redis';
import { NextResponse } from 'next/server';

export async function GET() {
  await redis.set('greeting', 'Hello from Redis!');
  const value = await redis.get('greeting');

  return NextResponse.json({ value });
}
