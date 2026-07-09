-- AVENAX waitlist schema (ADR-019). Email + timestamp + source. Nothing else.
CREATE TABLE IF NOT EXISTS waitlist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  source TEXT
);
