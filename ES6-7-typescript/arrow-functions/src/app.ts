// ARROW FUNCTIONS
    const schedules = [{ portName: 'Singapore', rate: [350] }];

    const mappedSchedules = schedules.map(schedule => schedule.portName.toUpperCase());

    console.log(mappedSchedules);