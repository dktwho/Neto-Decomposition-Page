import './App.css';

import News from './components/header/News/News';
import newsCategories from './data/newsСategories';
import newsNames from './data/newsNames';
import ExchangeRates from './components/header/ExchangeRates/ExchangeRates';
import currencyRates from './data/currencyRates';
import Ads from './components/header/Ads/Ads';

import Search from './components/body/Search';
import searchСategories from './data/searchСategories';
import Image from './components/header/common/Image/Image';

import Widgets from './components/footer/Widgets';

import WeatherWidget from './components/footer/Widgets/WeatherWidget/WeatherWidget';
import FavoritesWidget from './components/footer/Widgets/FavoritesWidget/FavoritesWidget';
import favoritePages from './data/favoritePages';
import GermanMapWidget from './components/footer/Widgets/GermanMapWidget/GermanMapWidget';
import germanMapItems from './data/germanMapItems';
import TVProgramWidget from './components/footer/Widgets/TVProgramWidget/TVProgramWidget';
import TVPrograms from './data/TVPrograms';
import EtherWidget from './components/footer/Widgets/EtherWidget/EtherWidget';
import ether from './data/ether';

function App() {
  return (
    <>
      <header className="App-header">
        <div className="App-wrapper">
          <div className="App-header__main">
            <News newsCategories={newsCategories} newsNames={newsNames} />

            <ExchangeRates currencyRates={currencyRates} />
          </div>

          <Ads
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
          >
            <Image
              containerClass="Ads__image-container"
              imgClass="Ads-image"
              src="https://pngimg.com/uploads/yandex/yandex_PNG24.png"
              alt="Plug"
            />
          </Ads>
        </div>
      </header>

      <div className="App-body">
        <div className="App-wrapper">

          <Search
            searchСategories={searchСategories}
            searchBarLabel="Яндекс"
            searchBtnName="Найти"
            searchAdvice="Найдётся всё. Например,"
            searchExample="фаза луны сегодня"
          />

          <Image
            containerClass="Banner"
            imgClass="Banner-image"
            src="https://narrowboatfarm.com/wp-content/uploads/2018/09/2018-08-carved-pumpkin-in-dark-1000-x-400.jpg" 
            alt="Plug"
          />

        </div>
      </div>

      <footer className="App-footer">
        <div className="App-wrapper">

          <Widgets>
            <WeatherWidget
              title="Погода"
              averageTemperature="+3"
              morningTemperature="-1"
              daytimeTemperature="+7"
            />
            <GermanMapWidget
              title="Карта Германии"
              items={germanMapItems}
            />
            <EtherWidget
              title="Эфир"
              items={ether}
            />
            <FavoritesWidget
              title="Посещаемое"
              items={favoritePages}
            />
            <TVProgramWidget
              title="Телепрограмма"
              items={TVPrograms}
            />
          </Widgets>

        </div>
      </footer>
    </>
  );
}

export default App;
