import type { BlogPost } from "@/lib/blog";

const MIN_TOPIC_WORD_LENGTH = 4;

/** Words too common in these titles to say two posts share a topic. */
const GENERIC_WORDS = new Set([
  "what", "when", "your", "with", "from", "that", "this", "about", "should", "know",
  "guide", "options", "evaluation", "discuss", "expect", "questions", "treatment",
  "therapy", "richmond", "virginia", "care", "help", "does", "more", "after",
]);

function topicWords(post: BlogPost): Set<string> {
  const words = `${post.title} ${post.slug}`.toLowerCase().split(/[^a-z]+/);
  return new Set(words.filter((word) => word.length >= MIN_TOPIC_WORD_LENGTH && !GENERIC_WORDS.has(word)));
}

/**
 * Up to `count` other posts, the ones sharing the most topic words first.
 * `posts` must already be newest-first (as listPublishedPosts returns them):
 * the sort is stable, so equal scores keep that order and a post with no
 * topical neighbours still gets the newest articles.
 */
export function relatedPosts(post: BlogPost, posts: readonly BlogPost[], count: number): BlogPost[] {
  const topics = topicWords(post);
  return posts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      candidate,
      score: [...topicWords(candidate)].filter((word) => topics.has(word)).length,
    }))
    .sort((left, right) => right.score - left.score)
    .slice(0, count)
    .map((entry) => entry.candidate);
}
