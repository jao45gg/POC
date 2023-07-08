import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';

config();

const db = new PrismaClient();

export default db;