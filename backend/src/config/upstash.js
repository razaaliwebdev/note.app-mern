import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import "dotenv/config";

// Create a new redis instance from environment variables
const redis = Redis.fromEnv();

// Create a new rate limiter
const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(100, "60 s"),
    analytics: true,
});

export default ratelimit;
