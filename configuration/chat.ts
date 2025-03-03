import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hey there! I’m ${AI_NAME} from ${OWNER_NAME}. I'm your go-to AI for all things DIY and home repair. Want to fix a leaky faucet, wire an outlet, or drain your dishwater? I’ve got easy-to-follow guides, tool recommendations, and step-by-step instructions to help you fix it yourself—without calling a handyman!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
