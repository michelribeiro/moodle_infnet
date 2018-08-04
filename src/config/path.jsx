export const paths = {
    LOGIN                : "https://lms.infnet.edu.br/moodle/login/token.php?",
    PATH_BASE            : "https://lms.infnet.edu.br/moodle/webservice/rest/server.php?",
}

export const services = {
    SERVICE              : "&service=moodle_mobile_app",
    MOODLEJSON           : "moodlewsrestformat=json",
    FILTER               : "&moodlewssettingfilter=true",
    FILE_URL             : "&moodlewssettingfileurl=true",
    COURSE               : "&courseid=",
    DETAIL_COURSE        : "&courseids[0]=",
    COMPETENCE_ID        : "&competencyid="
}

export const wsfunction = {
    DATA_USER            : "&wsfunction=core_webservice_get_site_info",
    COLLEGE_SUBJECTS     : "&wsfunction=core_enrol_get_users_courses",
    COMPETENCE           : "&wsfunction=tool_lp_data_for_course_competencies_page",
    GET_ASSIGNMENTS      : "&wsfunction=mod_assign_get_assignments",
    NOTES_BY_COMPETENCE  : "wsfunction=tool_lp_data_for_user_competency_summary_in_course"
}

export const autentication = {
    USERNAME             : "&username=",
    PASSWORD             : "&password=",
    WSTOKEN              : "&wstoken=",
    USERID               : "&userid="
}

// Detalhe da materia pegar o courseid= ID do curso
// ?wstoken=fcfb8aabee4b1933546e15b17d9e6c6e
// &moodlewsrestformat=json
// &wsfunction=mod_assign_get_assignments
// &moodlewssettingfilter=true
// &moodlewssettingfileurl=true
// &courseid=1595

// lista os TPs da materia com o courseids[0]=1591
// https://lms.infnet.edu.br/moodle/webservice/rest/server.php?
// wstoken=fcfb8aabee4b1933546e15b17d9e6c6e
// &moodlewsrestformat=json
// &wsfunction=mod_assign_get_assignments
// &courseids[0]=1591
// &moodlewssettingfileurl=true
// &moodlewssettingfilter=true

// duedate que traz a data de entrega dos TPs

// Notas por competencias
// paths.PATH_BASE+MOODLEJSON+COURSE+FILTER+FILE_URL+NOTES_BY_COMPETENCE+WSTOKEN+COMPETENCE_ID
// moodlewsrestformat=json
//courseid,
// moodlewssettingfilter=true,
// moodlewssettingfileurl=true,
// wsfunction=tool_lp_data_for_user_competency_summary_in_course,
// competencyid
// wstoken

//https://lms.infnet.edu.br/moodle/webservice/rest/server.php?moodlewsrestformat=json&courseid=1591&moodlewssettingfilter=true&moodlewssettingfileurl=truewsfunction=tool_lp_data_for_user_competency_summary_in_course&wstoken=fcfb8aabee4b1933546e15b17d9e6c6e&competencyid=1591

// PEGANDO COMPETÊNCIA
//paths.PATH_BASE+MOODLEJSON+COURSE=+''+FILTER+FILE_URL+COMPETENCE+WSTOKEN