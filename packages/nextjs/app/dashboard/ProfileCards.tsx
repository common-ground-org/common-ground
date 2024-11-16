import Card from "./Card";

function CommunityCard() {
  return <Card title="Community">Community</Card>;
}

function ProjectsCreatedCard() {
  return <Card title="Projects Created">Projects Created</Card>;
}

function ProjectsSupportedCard() {
  return <Card title="Projects Supported">Projects Supported</Card>;
}

function TokensOwnedCard() {
  return <Card title="Tokens Owned">Tokens Owned</Card>;
}

function NFTsOwnedCard() {
  return <Card title="NFTs Owned">NFTs Owned</Card>;
}

function WebProfileCards() {
  return (
    <>
      <div className="hidden sm:flex flex-row">
        <div className="flex flex-col grow pl-4 pr-2 gap-4">
          <CommunityCard />
          <ProjectsCreatedCard />
          <ProjectsSupportedCard />
        </div>
        <div className="flex flex-col w-2/5 pl-2 pr-4 gap-4">
          <TokensOwnedCard />
          <NFTsOwnedCard />
        </div>
      </div>
    </>
  );
}

function MobileProfileCards() {
  return <div className="block sm:hidden">MobileProfileCards</div>;
}

export default function ProfileCards() {
  return (
    <>
      <WebProfileCards />
      <MobileProfileCards />
    </>
  );
}
