-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "nickname" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "avatarUrl" TEXT,
    "password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "FavoriteMap" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mapName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavoriteMap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavoriteHero" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "heroId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavoriteHero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ViewHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT,
    "viewedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ViewHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavoritePin" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "pinUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavoritePin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FollowedTeam" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FollowedTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FollowedPlayer" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FollowedPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventFavorite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventFavorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prediction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,
    "predictedTeam" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualWinner" TEXT,
    "isCorrect" BOOLEAN,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "Prediction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Account_userId_idx" ON "Account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE INDEX "FavoriteMap_userId_idx" ON "FavoriteMap"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteMap_userId_mapName_key" ON "FavoriteMap"("userId", "mapName");

-- CreateIndex
CREATE INDEX "FavoriteHero_userId_idx" ON "FavoriteHero"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteHero_userId_heroId_key" ON "FavoriteHero"("userId", "heroId");

-- CreateIndex
CREATE INDEX "ViewHistory_userId_viewedAt_idx" ON "ViewHistory"("userId", "viewedAt");

-- CreateIndex
CREATE INDEX "ViewHistory_userId_itemType_idx" ON "ViewHistory"("userId", "itemType");

-- CreateIndex
CREATE UNIQUE INDEX "ViewHistory_userId_itemType_itemId_key" ON "ViewHistory"("userId", "itemType", "itemId");

-- CreateIndex
CREATE INDEX "FavoritePin_userId_idx" ON "FavoritePin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "FavoritePin_userId_pinUrl_key" ON "FavoritePin"("userId", "pinUrl");

-- CreateIndex
CREATE INDEX "FollowedTeam_userId_idx" ON "FollowedTeam"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "FollowedTeam_userId_teamId_key" ON "FollowedTeam"("userId", "teamId");

-- CreateIndex
CREATE INDEX "FollowedPlayer_userId_idx" ON "FollowedPlayer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "FollowedPlayer_userId_playerId_key" ON "FollowedPlayer"("userId", "playerId");

-- CreateIndex
CREATE INDEX "EventFavorite_userId_idx" ON "EventFavorite"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "EventFavorite_userId_itemType_itemId_key" ON "EventFavorite"("userId", "itemType", "itemId");

-- CreateIndex
CREATE INDEX "Prediction_userId_idx" ON "Prediction"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Prediction_userId_matchId_key" ON "Prediction"("userId", "matchId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteMap" ADD CONSTRAINT "FavoriteMap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteHero" ADD CONSTRAINT "FavoriteHero_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewHistory" ADD CONSTRAINT "ViewHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoritePin" ADD CONSTRAINT "FavoritePin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowedTeam" ADD CONSTRAINT "FollowedTeam_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowedPlayer" ADD CONSTRAINT "FollowedPlayer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventFavorite" ADD CONSTRAINT "EventFavorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prediction" ADD CONSTRAINT "Prediction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
