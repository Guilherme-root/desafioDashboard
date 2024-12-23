import data from '../../data/data.json'
import { OverviewCard, OverviewTodayCard} from './OverviewCard'

const convertNumber = (number) => {
  if(number > 10000){
  let num = number;
  num = num / 1000;
  return `${num}k`
  } return number;
}

export const OverviewContainer = () => {

  return (
    <section className='max-w-[1440] flex flex-wrap gap-[30px] place-content-center absolute top-[191px] left-0 right-0 mx-auto'>    
        {
            data.overview.map(obj => 
                <OverviewCard user={obj.user} 
                key= {obj.id}
                audienceType = {obj.audienceType}
                audience = {convertNumber(obj.audience)}
                network = {obj.network}
                isUp = {obj.isUp}
                today = {obj.today}
                />
                

            )
        }
    </section>
  )
}

export const OverviewTodayContainer = () => {
  return (
    <section className=''>
      <h2 className='text-2xl font-bold mb-[27px] -text--Dark-Grayish-Blue ml-8'>Overview Today</h2>
      <div className='flex flex-wrap'>
      {
        data['overview-today'].map(obj =>
          <OverviewTodayCard key={obj.id}
          network={obj.network}
          statsType={obj.statsType}
          stats={convertNumber(obj.stats)}
          porcentage={obj.porcentage}
          isUp={obj.isUp}
          />
        )
      }
      </div>
    </section>
    
  )
}


