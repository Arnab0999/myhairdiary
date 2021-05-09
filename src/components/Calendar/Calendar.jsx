import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ScheduleComponent, Month, Day, Week, WorkWeek, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

const CustomCalendar = () => {
    
    return (
        <ScheduleComponent height="700px" cssClass='virtual-scrolling' width='100%' selectedDate={new Date(2018, 4, 1)}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
    );
}

export default CustomCalendar;

