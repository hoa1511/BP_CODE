var tags_list = {
  //=========================ALARM [DB11]=============================
  Drying_control_cabinet_emergency_stop_failure: 'DB11,X0.0',
  Drying_control_cabinet_fire_signal_failure: 'DB11,X0.1',
  The_thermal_resistance_signal_of_the_return_air_temperature_in_the_heating_section_is_lost: 'DB11,X0.2',
  The_thermal_resistance_signal_of_the_supply_air_temperature_in_the_heating_section_is_lost: 'DB11,X0.3',
  The_high_temperature_in_the_heating_section_limits_the_loss_of_the_RTD_signal: 'DB11,X0.4',
  Insulation_section_1_return_air_temperature_thermal_resistance_signal_loss: 'DB11,X0.5',

  Insulation_section_1_Supply_air_temperature_thermal_resistance_signal_loss: 'DB11,X0.6',
  Insulation_section_1_High_temperature_limits_the_loss_of_RTD_signal: 'DB11,X0.7',
  Insulation_section_2_return_air_temperature_thermal_resistance_signal_loss: 'DB11,X1.0',
  Insulation_section_2_supply_air_temperature_thermal_resistance_signal_loss: 'DB11,X1.1',
  Insulation_section_2_High_temperature_limit_RTD_signal_loss: 'DB11,X1.2',
  The_return_air_temperature_of_the_heating_section_is_overtemperature_alarm: 'DB11,X1.3',
  The_temperature_of_the_supply_air_in_the_heating_section_is_over_temperature_alarm: 'DB11,X1.4',
  High_temperature_limit_overtemperature_alarm_in_the_heating_section: 'DB11,X1.5',
  Insulation_section_1_return_air_temperature_overtemperature_alarm: 'DB11,X1.6',
  Insulation_section_1_supply_air_temperature_overtemperature_alarm: 'DB11,X1.7',
  Insulation_section_1_High_temperature_limit_overtemperature_alarm: 'DB11,X2.0',
  Insulation_section_2_return_air_temperature_overtemperature_alarm: 'DB11,X2.1',
  Insulation_section_2_supply_air_temperature_overtemperature_alarm: 'DB11,X2.2',
  Insulation_section_2_High_temperature_limit_overtemperature_alarm: 'DB11,X2.3',
  fault_in_the_circuit_breaker_of_circulation_fan_1_in_the_heating_section: 'DB11,X2.4',
  Heating_section_circulating_fan_1_thermal_relay_failure: 'DB11,X2.5',
  The_air_pressure_switch_of_the_circulating_fan_in_the_heating_section_is_faulty: 'DB11,X2.6',
  The_contactor_of_the_circulating_fan_1_in_the_heating_section_is_faulty: 'DB11,X2.7',

  fault_in_the_circuit_breaker_of_circulation_fan_1_in_the_heating_section: 'DB11,X3.0',
  Heating_section_circulating_fan_2_thermal_relay_failure: 'DB11,X3.1',
  The_air_pressure_switch_of_the_circulating_fan_2_in_the_heating_section_is_faulty: 'DB11,X3.2',
  The_contactor_of_the_circulating_fan_2_in_the_heating_section_is_faulty: 'DB11,X3.3',
  Fault_in_the_circuit_breaker_of_insulation_section_1_circulation_fan: 'DB11,X3.4',
  Thermal_relay_failure_of_circulating_fan_in_insulation_section_1: 'DB11,X3.5',
  The_wind_pressure_switch_of_the_circulating_fan_in_the_insulation_section_1_is_faulty: 'DB11,X3.6',
  Insulation_section_1_circulating_fan_contactor_failure: 'DB11,X3.7',
  Circulation_fan_circuit_breaker_fault_in_insulation_section_2: 'DB11,X4.0',
  Thermal_relay_failure_of_the_insulation_section_2_circulating_fan: 'DB11,X4.1',
  The_air_pressure_switch_of_the_insulation_section_2_circulating_fan_is_faulty: 'DB11,X4.2',
  Circulation_fan_contactor_fault_in_insulation_section_2: 'DB11,X4.3',
  Exhaust_gas_fan_1_circuit_breaker_fault: 'DB11,X4.4',
  Exhaust_gas_fan_1_contactor_failure: 'DB11,X4.5',
  Exhaust_gas_fan_2_circuit_breaker_fault: 'DB11,X4.6',
  Exhaust_gas_fan_2_contactor_failure: 'DB11,X4.7',

  Fresh_air_fan_circuit_breaker_failure: 'DB11,X5.0',
  Fresh_air_fan_contactor_failure: 'DB11,X5.1',
  Faulty_air_circuit_breaker_of_the_entrance_air_curtain_fan: 'DB11,X5.2',
  Faulty_contactor_of_the_entrance_air_curtain_fan: 'DB11,X5.3',
  Faulty_air_circuit_breaker_of_the_export_air_curtain_fan: 'DB11,X5.4',
  Faulty_contactor_of_the_export_air_curtain_fan: 'DB11,X5.5',
  IM10_network_failure: 'DB11,X5.6',
  IM200_network_failure: 'DB11,X5.7',
  IM220_network_failure: 'DB11,X6.0',
  ML_inverter_network_failure: 'DB11,X6.1',
  KL01_inverter_network_failure: 'DB11,X6.2',
  TCJ01_inverter_network_failure: 'DB11,X6.3',
  PN1_network_failure: 'DB11,X6.4',
  PN2_network_failure: 'DB11,X6.5',
  Faulty_air_circuit_breaker_of_the_entrance_electric_door_1_in_the_drying_chamber: 'DB11,X6.6',
  Faulty_air_circuit_breaker_of_the_entrance_electric_door_2_in_the_drying_chamber: 'DB11,X6.7',
  Faulty_air_circuit_breaker_of_the_exit_electric_door_1_in_the_drying_chamber: 'DB11,X7.0',
  Faulty_air_circuit_breaker_of_the_exit_electric_door_2_in_the_drying_chamber: 'DB11,X7.1',
  The_electric_door_1_contactor_in_the_entrance_of_the_drying_room_is_faulty: 'DB11,X7.2',
  The_electric_door_2_contactor_in_the_entrance_of_the_drying_room_is_faulty: 'DB11,X7.3',
  The_electric_door_1_contactor_in_the_exit_of_the_drying_room_is_faulty: 'DB11,X7.4',
  The_electric_door_2_contactor_in_the_exit_of_the_drying_room_is_faulty: 'DB11,X7.5',
  Fan_pressure_switch_1_in_the_exhaust_fan_is_faulty: 'DB11,X7.6',
  Fan_pressure_switch_2_in_the_exhaust_fan_is_faulty: 'DB11,X7.7',

  The_fresh_air_fan_pressure_switch_is_faulty: 'DB11,X8.0',
  The_pressure_switch_of_the_entrance_air_curtain_fan_is_faulty: 'DB11,X8.1',
  The_pressure_switch_of_the_exit_air_curtain_fan_is_faulty: 'DB11,X8.2',
  Failure_of_the_burner_in_the_heating_section: 'DB11,X8.3',
  The_burner_in_insulation_section_1_is_faulty: 'DB11,X8.4',
  The_burner_in_insulation_section_2_is_faulty: 'DB11,X8.5',
  The_infrared_radiation_equipment_is_faulty: 'DB11,X8.6',
  The_timeout_for_opening_the_electric_door_1_at_the_entrance_of_the_drying_room_has_been_exceeded: 'DB11,X8.7',
  The_timeout_for_closing_the_electric_door_1_at_the_entrance_of_the_drying_room_has_been_exceeded: 'DB11,X9.0',
  The_timeout_for_opening_the_electric_door_2_at_the_entrance_of_the_drying_room_has_been_exceeded: 'DB11,X9.1',
  The_timeout_for_closing_the_electric_door_2__at_the_entrance_of_the_drying_room_has_been_exceeded: 'DB11,X9.2',
  The_timeout_for_opening_the_electric_door_1_at_the_exit_of_the_drying_room_has_been_exceeded: 'DB11,X9.3',
  The_timeout_for_closing_the_electric_door_1_at_the_exit_of_the_drying_room_has_been_exceeded: 'DB11,X9.4',
  The_timeout_for_opening_the_electric_door_2_at_the_exit_of_the_drying_room_has_been_exceeded: 'DB11,X9.5',
  The_timeout_for_closing_the_electric_door_2_at_the_exit_of_the_drying_room_has_been_exceeded: 'DB11,X9.6',
  The_ignition_of_the_burner_in_the_heating_section_is_abnormal: 'DB11,X9.7',
  The_ignition_of_the_burner_in_insulation_section_1_is_abnormal: 'DB11,X10.0',
  The_ignition_of_the_burner_in_insulation_section_2_is_abnormal: 'DB11,X10.1',
  The_infrared_radiation_equipment_startup_is_abnormal: 'DB11,X10.2',

  //=========================CV-ALARM [DB12]==========================
  MCP_emergency_stop_failure: 'DB12,X0.0',
  MCPBS1_emergency_stop_failure: 'DB12,X0.1',
  ML01_tightening_fault: 'DB12,X0.2',
  ML02_tightening_fault: 'DB12,X0.3',
  KL01_tightening_fault: 'DB12,X0.4',
  ML02_load_overload_fault: 'DB12,X0.5',
  ML01_load_overload_fault: 'DB12,X0.6',
  KL01_load_overload_fault: 'DB12,X0.7',
  ML_circuit_breaker_fault: 'DB12,X1.0',
  ML_inverter_fault: 'DB12,X1.1',
  ML01_strong_cooling_fan_circuit_breaker_fault: 'DB12,X1.2',
  ML01_strong_cooling_fan_contactor_failure: 'DB12,X1.3',
  ML02_strong_cooling_fan_circuit_breaker_fault: 'DB12,X1.4',
  ML02_strong_cooling_fan_contactor_failure: 'DB12,X1.5',
  ML01_isolating_switch_is_not_powered: 'DB12,X1.6',
  ML02_isolating_switch_is_not_powered: 'DB12,X1.7',

  ML01_thermistor_failure: 'DB12,X2.0',
  ML02_thermistor_failure: 'DB12,X2.1',
  KL01_strong_cooling_fan_circuit_breaker_fault: 'DB12,X2.2',
  KL01_strong_cooling_fan_contactor_failure: 'DB12,X2.3',
  KL01_inverter_failure: 'DB12,X2.4',
  KL01_circuit_breaker_fault: 'DB12,X2.5',
  KL01_thermistor_failure: 'DB12,X2.6',
  TCJ01_circuit_breaker_fault: 'DB12,X2.7',
  TCJ01_strong_cooling_contactor_fault: 'DB12,X3.0',
  TCJ02_circuit_breaker_fault: 'DB12,X3.1',
  TCJ02_contactor_failure: 'DB12,X3.2',
  TCJ02_strong_cooling_fan_circuit_breaker_fault: 'DB12,X3.3',
  TCJ02_strong_cooling_fan_contactor_fault: 'DB12,X3.4',
  DC01_location_is_abnormal_alarm: 'DB12,X3.5',
  DC01_opening_timeout: 'DB12,X3.6',
  DC01_closing_timeout: 'DB12,X3.7',

  TZQ01_location_is_abnormal: 'DB12,X4.0',
  TZQ01_opening_timeout: 'DB12,X4.1',
  TZQ01_closing_timeout: 'DB12,X4.2',
  TCJ01_Forward_Limit_Fault: 'DB12,X4.3',
  TCJ01_reverse_limit_fault: 'DB12,X4.4',
  TCJ01_forward_position_timeout: 'DB12,X4.5',
  TCJ01_reverse_position_timeout: 'DB12,X4.6',
  TCJ02_Forward_Limit_Fault: 'DB12,X4.7',
  TCJ02_reverse_limit_fault: 'DB12,X5.0',
  TCJ02_forward_position_timeout: 'DB12,X5.1',
  TCJ02_reverse_position_timeout: 'DB12,X5.2',
  KL01_vehicle_departure_abnormal: 'DB12,X5.3',
  DC01_front_car_group_position_switch_fault: 'DB12,X5.4',
  Powder_room_automatic_interlock_not_passed: 'DB12,X5.5',
  Traffic_congestion_at_the_exit: 'DB12,X5.6',
  ML_emergency_stop_button_pressed: 'DB12,X5.7',

  ML_drying_room_entrance_emergency_stop_button_pressed: 'DB12,X6.0',
  ML_drying_room_exit_emergency_stop_button_pressed: 'DB12,X6.1',
  KL01_isolation_switch_is_not_powered: 'DB12,X6.2',
  The_position_of_the_electric_door_at_the_entrance_of_the_car_group_drying_room_is_abnormal: 'DB12,X6.3',
  The_position_of_the_electric_door_at_the_exit_of_the_car_group_drying_room_is_abnormal: 'DB12,X6.4',
  TCJ01_inverter_failure: 'DB12,X6.5',
  Powder_room_manual_interlock_not_passed: 'DB12,X6.6',
  Clean_room_emergency_stop_button_1_pressed: 'DB12,X6.7',
  Clean_room_emergency_stop_button_2_pressed: 'DB12,X7.0',
  Clean_room_emergency_stop_button_3_pressed: 'DB12,X7.1',
  ML_car_group_position_switch_fault: 'DB12,X7.2',
  Faulty_detection_switch_for_the_front_car_group_at_the_entrance_door_of_the_drying_room: 'DB12,X7.3',
  Faulty_detection_switch_for_the_front_car_group_at_the_exit_door_of_the_drying_room: 'DB12,X7.4',
  KL01_left_side_position_1_switch_fault: 'DB12,X7.5',
  KL01_left_side_position_2_switch_fault: 'DB12,X7.6',
  KL01_right_side_position_1_switch_fault: 'DB12,X7.7',

  KL01_right_side_position_2_switch_fault: 'DB12,X8.0',
  TZQ01_front_car_group_disengagement_switch_fault: 'DB12,X8.1',
  TZQ01_rear_car_group_disengagement_switch_fault: 'DB12,X8.2',
  TZQ01_transfer_window_open_switch_fault: 'DB12,X8.3',
  TZQ01_transfer_window_close_switch_fault: 'DB12,X8.4',
  The_ML_train_set_in_place_TCJ01_is_not_returned_to_place: 'DB12,X8.5',
  TCJ01_forward_return_position_limit_switch_abnormal: 'DB12,X8.6',
  TCJ02_forward_return_position_limit_switch_abnormal: 'DB12,X8.7',
  TCJ02_abnormal_cart_pushing_failed_to_take_away_the_car_group: 'DB12,X9.0',
  TCJ01_abnormal_cart_pushing_failed_to_take_away_the_car_group: 'DB12,X9.1',
  TCJ01_abnormal_cart_pushing_detection_switch_fault: 'DB12,X9.2',
  TCJ01_has_a_car_but_is_not_running: 'DB12,X9.3',
  DC01_curve_keeping_timeout: 'DB12,X9.4',
  TCJ02_car_group_disengagement_switch_abnormal_alarm: 'DB12,X9.5',
  TCJ02_car_group_not_taken_away_alarm: 'DB12,X9.6',
  Low_temperature_alarm: 'DB12,X9.7',


  //=========================DB13 ==========================

  //=========================PLC_tag[DB14]==========================
  The_circulating_fan_1_in_the_heating_section_starts_feedback: 'DB14,X14.0',
  The_circulating_fan_2_in_the_heating_section_starts_feedback: 'DB14,X14.1',
  Insulation_section_1_circulating_fan_start_feedback: 'DB14,X14.2',
  Insulation_section_2_circulating_fan_start_feedback: 'DB14,X14.3',
  Exhaust_fan_1_starts_feedback: 'DB14,X14.4',

  Exhaust_fan_2_starts_feedback: 'DB14,X14.5',
  Fresh_air_fan_start_feedback: 'DB14,X14.6',
  Drying_room_entrance_electric_door_1_open_feedback: 'DB14,X14.7',
  Drying_chamber_entrance_electric_door_1_close_feedback: 'DB14,X15.0',
  Drying_room_entrance_electric_door_2_open_feedback: 'DB14,X15.1',

  Drying_room_entrance_electric_door_2_close_feedback: 'DB14,X15.2',
  Drying_chamber_exit_electric_door_1_open_feedback: 'DB14,X15.3',
  Drying_chamber_outlet_electric_door_1_close_feedback: 'DB14,X15.4',
  Drying_chamber_exit_electric_door_2_open_feedback: 'DB14,X15.5',
  Drying_chamber_exit_electric_door_2_close_feedback: 'DB14,X15.6',
  Inlet_air_curtain_fan_start_feedback: 'DB14,X15.7',
  Outlet_air_curtain_fan_start_feedback: 'DB14,X16.0',
  The_circulating_fan_1_in_the_heating_section_is_overloaded: 'DB14,X16.3',
  The_circulating_fan_2_in_the_heating_section_is_overloaded: 'DB14,X16.4',
  The_circulating_fan_1_in_the_insulation_section_is_overloaded: 'DB14,X16.5',
  The_circulating_fan_2_of_the_insulation_section_is_overloaded: 'DB14,X16.6',
  Heating_section_circulating_fan_1_wind_pressure_switch: 'DB14,X17.0',
  Heating_section_circulating_fan_2_wind_pressure_switch: 'DB14,X17.1',
  Insulation_section_circulating_fan_1_wind_pressure_switch: 'DB14,X17.2',
  Insulation_section_circulating_fan_2_wind_pressure_switch: 'DB14,X17.3',
  Exhaust_gas_fan_1_wind_pressure_switch: 'DB14,X17.4',
  Exhaust_gas_fan_2_wind_pressure_switch: 'DB14,X17.5',
  Fresh_air_fan_air_pressure_switch: 'DB14,X17.6',
  Inlet_air_curtain_machine_wind_pressure_switch: 'DB14,X17.7',

  Outlet_air_curtain_machine_wind_pressure_switch: 'DB14,X18.0',
  The_electric_door_1_at_the_entrance_of_the_drying_room_is_open_in_place: 'DB14,X18.4',
  The_electric_door_1_at_the_entrance_of_the_drying_room_is_closed_in_place: 'DB14,X18.5',
  The_electric_door_2_at_the_entrance_of_the_drying_room_is_open_in_place: 'DB14,X18.6',
  The_electric_door_2_at_the_entrance_of_the_drying_room_is_closed_in_place: 'DB14,X18.7',
  The_drying_room_outlet_electric_door_1_is_open_in_place: 'DB14,X19.0',
  The_drying_room_outlet_electric_door_1_is_closed_in_place: 'DB14,X19.1',
  The_drying_room_outlet_electric_door_2_is_open_in_place: 'DB14,X19.2',
  The_drying_room_outlet_electric_door_2_is_closed_in_place: 'DB14,X19.3',

  Burner_fault_signal_in_the_heating_section: 'DB14,X20.0',
  Heating_section_burner_operation_signal: 'DB14,X20.1',
  Insulation_section_burner_1_fault_signal: 'DB14,X20.2',
  Insulation_section_burner_1_running_signal: 'DB14,X20.3',
  Insulation_section_burner_2_fault_signal: 'DB14,X20.4',
  Insulation_section_burner_2_running_signal: 'DB14,X20.5',
  Infrared_radiation_oven_operation: 'DB14,X20.6',
  Infrared_radiation_oven_failure: 'DB14,X20.7',

  MCP_emergency_stop: 'DB14,X200.0',
  MCP_starts_automatically: 'DB14,X200.1',
  MCP_stops_automatically: 'DB14,X200.2',
  MCP_alarm_reset: 'DB14,X200.3',
  MCP_alarm_silence: 'DB14,X200.4',
  MCP_light_inspection: 'DB14,X200.5',
  MCP_manually: 'DB14,X200.6',
  MCP_Automatic: 'DB14,X200.7',
  MCP_controls_the_power_supply: 'DB14,X201.0',
  MCP_energy_metering: 'DB14,X201.1',
  ML01_start_button: 'DB14,X201.2',
  ML02_start_button: 'DB14,X201.3',
  KL01_start_button: 'DB14,X201.4',
  TCJ01_forward_button: 'DB14,X201.5',
  TCJ01_reverse_button: 'DB14,X201.6',
  TCJ02_forward_button: 'DB14,X201.7',

  Pause_4: 'DB14,X206.0',
  Pause_5: 'DB14,X206.1',
  Pause_6: 'DB14,X206.2',
  Pause_7: 'DB14,X206.3',
  Pause_8: 'DB14,X206.4',
  Pause_9: 'DB14,X206.5',

  ML01_maintenance_switch: 'DB14,X207.0',
  ML01_thermistor: 'DB14,X207.1',
  ML01_motor_overload: 'DB14,X207.2',
  ML01_is_too_tight: 'DB14,X207.3',
  ML01_is_too_loose: 'DB14,X207.4',

  KL01_maintenance_switch: 'DB14,X208.0',
  KL01_thermistor: 'DB14,X208.1',
  KL01_motor_overload: 'DB14,X208.2',
  KL01_is_too_tight: 'DB14,X208.3',
  KL01_is_too_loose: 'DB14,X208.4',
  Inspection_of_workpieces_at_the_entrance_position_of_the_drying_chamber: 'DB14,X208.5',
  The_stopper_transfer_window_closes: 'DB14,X208.6',
  The_stopper_transfer_window_opens: 'DB14,X208.7',

  The_ML01_set_is_in_place: 'DB14,X209.0',
  TCJ01_returns_to_place: 'DB14,X209.1',
  TCJ01_in_place: 'DB14,X209.2',
  DC01_front_train_in_place: 'DB14,X209.3',
  DC01_rear_train_in_place: 'DB14,X209.4',
  DC01_opens_into_place: 'DB14,X209.5',
  DC01_closed_in_place: 'DB14,X209.6',
  TCJ01_cart_anomaly_detection_switch: 'DB14,X209.7',

  TCJ01_offside_1: 'DB14,X210.0',
  TCJ01_offside_2: 'DB14,X210.1',
  KL01_occupies_the_left_side: 'DB14,X210.2',
  KL_PX2: 'DB14,X210.3',
  KL_PX3: 'DB14,X210.4',
  KL01_occupies_the_right_side: 'DB14,X210.5',
  KL_PX5: 'DB14,X210.6',
  KL_PX6: 'DB14,X210.7',

  TZQ01_opens_into_place: 'DB14,X211.0',
  TZQ01_is_closed_in_place: 'DB14,X211.1',
  TZQ02_opens_into_place: 'DB14,X211.2',
  TZQ02_is_closed_in_place: 'DB14,X211.3',
  TZQ01_front_train_disengaged: 'DB14,X211.4',
  TZQ01_rear_disengaged: 'DB14,X211.5',

  TCJ02_returns_in_place: 'DB14,X212.0',
  TCJ02_forward_in_place: 'DB14,X212.1',
  TCJ02_set_disengaged: 'DB14,X212.2',
  ML_pushhead_detection: 'DB14,X212.3',
  TCJ02_offside_1: 'DB14,X212.4',
  TCJ02_offside_2: 'DB14,X212.5',


  Workpiece_inspection_in_front_of_the_exit_door_of_the_drying_room: 'DB14,X213.0',

  Pause_1: 'DB14,X222.0',
  Pause_2: 'DB14,X222.1',
  Pause_3: 'DB14,X222.2',

  Inlet_pushhead_detection: 'DB14,X227.0',
  Entrance_car_group_detection_1: 'DB14,X227.1',
  Entrance_car_group_detection_2: 'DB14,X227.2',
  Inlet_photoelectric_detection_1: 'DB14,X227.3',
  Inlet_photoelectric_detection_2: 'DB14,X227.5',//227.4 k xài

  Exit_vehicle_group_detection_1: 'DB14,X228.0',
  Exit_vehicle_group_detection_2: 'DB14,X228.1',

  ML02_thermistor: 'DB14,X229.1',
  ML02_motor_overload: 'DB14,X229.2',
  ML02_is_too_tight: 'DB14,X229.3',
  ML02_is_too_loose: 'DB14,X229.4',
  ML02_pulse_detection: 'DB14,X229.5',

  ML_inverter_running_signal: 'DB14,X301.2',
  ML_inverter_fault_input: 'DB14,X301.3',

  KL_inverter_running_signal: 'DB14,X321.2',
  KL_inverter_failure: 'DB14,X321.3',
  
  TCJ01_inverter_operation: 'DB14,X341.2',
  TCJ01_inverter_failure: 'DB14,X341.3',
  
  Powder_room_interlock_automatic_signal: 'DB14,X350.0',
  Powder_room_interlock_manual_signal: 'DB14,X350.1',
  Powder_room_heartbeat_signal: 'DB14,X350.2',

  Friction_line_heartbeat_signal: 'DB14,X351.0',
  The_train_group_requests_entry: 'DB14,X351.1',
  The_train_stopped_in_place: 'DB14,X351.2',
  Friction_line_inlet_equipment_failure: 'DB14,X351.3',

  The_outlet_friction_motor_runs: 'DB14,X352.0',
  The_outlet_friction_motor_is_faulty: 'DB14,X352.1',

  Insulation_section_2_burner_forward_rotation_signal: 'DB14,X353.0',
  Insulation_section_2_burner_reversal_signal: 'DB14,X353.1',
  Remote_start_stop_of_infrared_radiant_ovens: 'DB14,X353.2',
  Fan_operating_signal: 'DB14,X353.3',
  The_device_runs: 'DB14,X353.4',
  Equipment_failure: 'DB14,X353.5',

  ML01_start_instructions: 'DB14,X354.0',
  ML02_start_instructions: 'DB14,X354.1',
  KL01_start_instructions: 'DB14,X354.2',
  TCJ01_forward_rotation_indication: 'DB14,X354.3',
  TCJ01_inverted_indication: 'DB14,X354.4',
  TCJ02_forward_rotation_indication: 'DB14,X354.5',
  TCJ02_inverted_indication: 'DB14,X354.6',
  TZQ01_opens_indication: 'DB14,X354.7',

  DC01_opens_the_indication: 'DB14,X355.1',
  DC01_stops_indication: 'DB14,X355.2',

  MCPBS1_emergency_stop_indication: 'DB14,X356.3',

  Give_the_powder_room_a_heartbeat_signal: 'DB14,X357.0',
  The_conveyor_chain_of_the_powder_room_is_run: 'DB14,X357.1',
  Signal_the_fault_of_the_conveyor_chain_to_the_powder_room: 'DB14,X357.2',
  Model_changes_are_permitted: 'DB14,X357.3',

  Heartbeat_signal: 'DB14,X358.0',
  Friction_lines_are_allowed_to_enter_the_car: 'DB14,X358.1',
  Move_in_complete: 'DB14,X358.2',
  Conveyor_chain_operating_signal: 'DB14,X358.3',
  Conveyor_chain_failure: 'DB14,X358.4',

  The_outlet_air_curtain_fan_stops_automatically: 'DB14,X360.0',
  The_inlet_air_curtain_fan_stops_automatically: 'DB14,X360.1',
  Heating_section_circulating_fan_1_start_indication: 'DB14,X360.2',
  Heating_section_circulating_fan_1_fault_set: 'DB14,X360.3',
  Heating_section_circulating_fan_2_start_indication: 'DB14,X360.4',
  Heating_section_circulating_fan_2_fault_set: 'DB14,X360.5',
  Insulation_section_1_circulating_fan_start_indication: 'DB14,X360.6',
  Insulation_section_1_circulating_fan_fault_collection: 'DB14,X360.7',

  Insulation_section_2_circulating_fan_start_indication: 'DB14,X361.0',
  Insulation_section_2_circulating_fan_fault_collection: 'DB14,X361.1',
  The_drying_exhaust_gas_fan_starts_automatically: 'DB14,X361.2',
  Summary_of_exhaust_gas_fan_1_failures: 'DB14,X361.3',
  Exhaust_gas_fan_1_starts_the_middle_position: 'DB14,X361.4',
  Summary_of_exhaust_gas_fan_2_failures: 'DB14,X361.5',
  Exhaust_fan_2_starts_the_middle_position: 'DB14,X361.6',
  Summary_of_fresh_air_fan_failures: 'DB14,X361.7',

  Fresh_air_fan_starting_intermediate_position: 'DB14,X362.0',
  Summary_of_inlet_air_curtain_fan_failures: 'DB14,X362.1',
  The_inlet_air_curtain_fan_starts_the_middle_position: 'DB14,X362.2',
  Summary_of_outlet_air_curtain_fan_failures: 'DB14,X362.3',

  TCJ01_forward_rotation: 'DB14,X363.3',
  TCJ01_inversion: 'DB14,X363.4',
  TCJ01_deceleration: 'DB14,X363.5',
  TCJ02_forward_start: 'DB14,X363.6',
  TCJ02_Reverse_Start: 'DB14,X363.7',

  The_drying_room_entrance_door_is_open_in_place: 'DB14,X364.6',

  The_drying_room_entrance_door_is_closed_in_place: 'DB14,X365.0',
  The_drying_room_entrance_door_is_closed: 'DB14,X365.1',
  The_drying_room_exit_door_is_open_in_place: 'DB14,X365.2',
  The_drying_room_exit_door_is_closed_in_place: 'DB14,X365.3',

  Heating_section_burner_operation_indication: 'DB14,X366.6',

  Insulation_section_1_burner_operation_instructions: 'DB14,X367.0',
  The_insulation_section_2_burner_starts: 'DB14,X367.1',
  Insulation_section_2_burner_operation_instructions: 'DB14,X367.2',
  The_infrared_radiation_oven_starts: 'DB14,X367.3',
  Infrared_radiation_oven_operation_indication: 'DB14,X367.4',

  The_drying_room_is_forced_into_the_car: 'DB14,X368.4',

  Heating_is_complete_and_allowed_to_enter_the_car: 'DB14,X370.6',

  ML_set_in_place_switch_fault_trigger_condition_1: 'DB14,X373.5',
  DC01_front_car_set_in_place_switch_failure: 'DB14,X373.6',

  TCJ02_cart_abnormal: 'DB14,X374.7',
  TCJ01_is_out_of_the_car_abnormally: 'DB14,X375.0',

  DC01_location_is_abnormal: 'DB14,X377.0',
  TZQ01_location_is_abnormal: 'DB14,X377.1',
  ML01_is_too_tight1: 'DB14,X377.2',
  ML01_is_too_loose_1: 'DB14,X377.3',
  ML02_is_too_tight1: 'DB14,X377.4',
  ML02_too_loose_1: 'DB14,X377.5',
  KL01_is_too_tight1: 'DB14,X377.6',
  KL01_is_too_loose1: 'DB14,X377.7',

  ML_in_place_switch_timer_reset: 'DB14,X378.0',
  DC01_front_car_switch_timer_reset: 'DB14,X378.1',
  TCJ01_is_reset_when_the_car_is_out_of_the_car_abnormally: 'DB14,X378.2',
  TCJ02_is_reset_when_the_car_is_out_of_the_car_abnormally: 'DB14,X378.3',
  Inlet_car_group_detection_timing_reset: 'DB14,X378.4',
  Exit_car_group_detection_timing_reset: 'DB14,X378.5',
  KL01_is_reset_abnormally: 'DB14,X378.6',
  KL01_is_out_of_the_car_abnormally: 'DB14,X378.7',

  Force_loading: 'DB14,X379.4',

  //=========================DATA ANALOG [DB16]==========================  

  The_actual_value_of_the_return_air_temperature_in_the_heating_section: 'DB16,REAL0',
  The_actual_value_of_the_supply_air_temperature_in_the_heating_section: 'DB16,REAL6',
  The_actual_value_of_the_high_temperature_limit_in_the_heating_section: 'DB16,REAL12',
  The_actual_value_of_the_return_air_temperature_of_the_insulation_section_1: 'DB16,REAL18',
  The_actual_value_of_the_supply_air_temperature_of_the_insulation_section_1: 'DB16,REAL24',
  Insulation_section_1_High_temperature_limit_actual_value: 'DB16,REAL30',
  The_actual_value_of_the_return_air_temperature_of_the_insulation_section_2: 'DB16,REAL36',
  The_actual_value_of_the_supply_air_temperature_of_the_insulation_section_2: 'DB16,REAL42',
  Insulation_section_2_High_temperature_limit_actual_value: 'DB16,REAL48',

  Heating_section_return_air_temperature_over_temperature_setting: 'DB16,REAL54',
  Heating_section_supply_air_temperature_over_temperature_setting: 'DB16,REAL58',
  Heating_section_high_temperature_limit_over_temperature_setting: 'DB16,REAL62',
  Insulation_section_1_return_air_temperature_over_temperature_setting: 'DB16,REAL66',
  Insulation_section_1_The_supply_air_temperature_is_set_over_temperature: 'DB16,REAL70',
  Insulation_section_1_High_temperature_limit_overtemperature_setting: 'DB16,REAL74',
  Insulation_section_2_return_air_temperature_overtemperature_setting: 'DB16,REAL78',
  Insulation_section_2_The_supply_air_temperature_is_set_over_temperature: 'DB16,REAL82',
  Insulation_section_2_High_temperature_limit_overtemperature_setting: 'DB16,REAL86',
  The_return_air_temperature_setting_of_the_heating_section: 'DB16,REAL90',
  Insulation_section_1_return_air_temperature_setting: 'DB16,REAL94',
  Holding_section_2_return_air_temperature_setting: 'DB16,REAL98',

  Fan_delay_stop_time_setting: 'DB16,INT102',
  Fan_delay_stop_time_PV: 'DB16,INT104',
  Fan_delay_stop_time_CV: 'DB16,INT106',
  Fan_delay_stop_time_remaining: 'DB16,INT108',

  The_upper_limit_temperature_of_the_burner_in_the_heating_section: 'DB16,REAL262',
  Lower_limit_temperature_of_burner_in_the_heating_section: 'DB16,REAL266',
  Upper_limit_temperature_of_burner_in_insulation_section_1: 'DB16,REAL270',
  Insulation_section_1_Lower_limit_temperature_of_burner: 'DB16,REAL274',
  Upper_limit_temperature_of_burner_in_insulation_section_2: 'DB16,REAL278',
  Holding_section_2_Lower_limit_temperature_of_burner: 'DB16,REAL282' 
}


var tags_array = [];
for (let key in tags_list) {
   tags_array.push(key);
}

module.exports.tags_list = function () {
   return tags_list;
};

module.exports.tags_array = function () {
   return tags_array;
};

module.exports.fn_tag = function (socket, values_module) {
   let data = {};
   for (let key in values_module) {
       data[key] = values_module[key];
   }
   socket.emit('all_data', data);
   try {
      //  socket.emit('The_actual_value_of_the_supply_air_temperature_in_the_heating_section', values_module['The_actual_value_of_the_supply_air_temperature_in_the_heating_section']);
      //  socket.emit('The_actual_value_of_the_return_air_temperature_in_the_heating_section', values_module['The_actual_value_of_the_return_air_temperature_in_the_heating_section']);
      //  socket.emit('The_actual_value_of_the_high_temperature_limit_in_the_heating_section', values_module['The_actual_value_of_the_high_temperature_limit_in_the_heating_section']);
      
      //  socket.emit('The_actual_value_of_the_supply_air_temperature_of_the_insulation_section_1', values_module['The_actual_value_of_the_supply_air_temperature_of_the_insulation_section_1']);
      //  socket.emit('The_actual_value_of_the_return_air_temperature_of_the_insulation_section_1', values_module['The_actual_value_of_the_return_air_temperature_of_the_insulation_section_1']);
      //  socket.emit('Insulation_section_1_High_temperature_limit_actual_value', values_module['Insulation_section_1_High_temperature_limit_actual_value']);

      //  socket.emit('The_actual_value_of_the_supply_air_temperature_of_the_insulation_section_2', values_module['The_actual_value_of_the_supply_air_temperature_of_the_insulation_section_2']);
      //  socket.emit('The_actual_value_of_the_return_air_temperature_of_the_insulation_section_2', values_module['The_actual_value_of_the_return_air_temperature_of_the_insulation_section_2']);
      //  socket.emit('Insulation_section_2_High_temperature_limit_actual_value', values_module['Insulation_section_2_High_temperature_limit_actual_value']);
   
      
   } catch (error) {
       
   }

   

   


 };
