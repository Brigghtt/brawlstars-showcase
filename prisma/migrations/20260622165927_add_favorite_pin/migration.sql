-- CreateTable
CREATE TABLE "FavoritePin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "pinUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FavoritePin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "FavoritePin_userId_idx" ON "FavoritePin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "FavoritePin_userId_pinUrl_key" ON "FavoritePin"("userId", "pinUrl");
