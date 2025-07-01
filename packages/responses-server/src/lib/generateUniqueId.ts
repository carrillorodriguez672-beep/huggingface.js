/**
 * AI-generated file using Cursor + Claude 4
 *
 * Generate a unique ID for the response
 */
import { randomBytes } from "crypto";

export function generateUniqueId(prefix?: string): string {
	const id = randomBytes(24).toString("hex");
	return prefix ? `${prefix}_${id}` : id;
}
