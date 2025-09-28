const Home = () => {
  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">TradingViewWidget</div>
        <div className="md:col-span-1 xl:col-span-1">TraidingViewWidget</div>
      </section>
      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          TradingViewWidget
        </div>
        <div className="h-full md:col-span-1 xl:col-span-1">
          TradingViewWidget
        </div>
      </section>
    </div>
  );
};

export default Home;
