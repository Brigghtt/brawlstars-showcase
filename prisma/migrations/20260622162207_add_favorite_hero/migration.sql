-- CreateTable
CREATE TABLE "FavoriteHero" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "heroId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FavoriteHero_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "FavoriteHero_userId_idx" ON "FavoriteHero"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteHero_userId_heroId_key" ON "FavoriteHero"("userId", "heroId");
