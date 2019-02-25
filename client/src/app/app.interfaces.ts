// Project configuration
export interface ProjectConfig {
  managerScriptPath: string;
  workerScriptPath:  string;
  computeResources:  string; // Comma seperated string for CPU Cores, RAM(MB), & HDD(MB), Ex: "1,5120,5120"
}

// Project environment variables
export interface ProjectVariables {
  key:   string;
  value: string;
}

// Project
export interface Project {
  uuid:        string;
  name:        string;
  label:       string;
  routeUrl:    string;
  description: string;
  jobCount?:   number;
  config:      ProjectConfig;
  variables:   Array<ProjectVariables>;
}

// Project job status
export interface JobStatus {
  duration:      number;
  activeWorkers: number; // active/total, Ex: "4/4"
  tasksComplete: string; // complete/total, Ex: "82/100"
}

// Project job
export interface Job {
  breadcrumb: any;
  uuid:      string;
  starttime: number;
  status:    JobStatus;
  config:    ProjectConfig; // Project configuration set at job start time
  variables: Array<ProjectVariables>; // Project environment variables set at job start time
}

export interface User {

}
