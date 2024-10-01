import {
  todo,
  Backlog,
  HighPriority,
  LowPriority,
  MediumPriority,
  UrgentPrioritycolour,
  inprogress,
  Nopriority,
  UrgentPrioritygrey,
  Cancelled,
  Done,
} from "./icons_FEtask";

const iconTypes = {
  Todo: todo,
  "In progress": inprogress,
  Backlog: Backlog,
  Done: Done,
  Cancelled: Cancelled,
  Urgent: UrgentPrioritycolour,
  High: HighPriority,
  Medium: MediumPriority,
  Low: LowPriority,
  "No priority": Nopriority,
};

export const icons = Object.entries(iconTypes).map(([type, value]) => ({
  type,
  value,
}));

export const assignIcon = (type) => iconTypes[type] || undefined;

const priorityIcons = {
  0: Nopriority,
  1: LowPriority,
  2: MediumPriority,
  3: HighPriority,
  4: UrgentPrioritygrey,
};

export const priorityIcon = (priority) => priorityIcons[priority];

export const getAvailabilityById = (taskId, allTickets, allUser) => {
  const task = allTickets.find(({ id }) => id === taskId);
  return task
    ? allUser.find(({ id }) => id === task.userId)?.available
    : undefined;
};
