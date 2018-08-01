export const paths = {
    LOGIN                : "https://lms.infnet.edu.br/moodle/login/token.php?",
    PATH_BASE            : "https://lms.infnet.edu.br/moodle/webservice/rest/server.php?",
}

export const services = {
    SERVICE              : "&service=moodle_mobile_app",
    MOODLEJSON           : "&moodlewsrestformat=json",
    FILTER               : "&moodlewssettingfilter=true",
    FILE_URL             : "&moodlewssettingfileurl=true"
}

export const wsfunction = {
    DATA_USER            : "&wsfunction=core_webservice_get_site_info",
    COLLEGE_SUBJECTS     : "&wsfunction=core_enrol_get_users_courses",
    COMPETENCE           : "&wsfunction=tool_lp_data_for_course_competencies_page"
}

export const autentication = {
    USERNAME             : "&username=",
    PASSWORD             : "&password=",
    WSTOKEN              : "&wstoken=",
    USERID               : "&userid="
}


// login, aqui eu pego o wstoken do usuario
// username=michel.ribeiro&password=D16*08a1981&service=moodle_mobile_app


// Inserir o token na url abaixo para pegar userId e userpictureurl
// wstoken=419551137a94381ff28ea1eddce6615a&moodlewsrestformat=json&wsfunction=core_webservice_get_site_info

// Iserir o token e userId na url abaixo para pegar a lista das materias
// wstoken=419551137a94381ff28ea1eddce6615a&moodlewsrestformat=json&wsfunction=core_enrol_get_users_courses&userid=3104


// pegar competencia da materia
/* https://lms.infnet.edu.br/moodle/webservice/rest/server.php
?
wstoken=419551137a94381ff28ea1eddce6615a
&
moodlewsrestformat=json
&
courseid=1595
&
moodlewssettingfilter=true
&
moodlewssettingfileurl=true
&
wsfunction=tool_lp_data_for_course_competencies_page

nota por competencia
wsfunction=tool_lp_data_for_user_competency_summary_in_course, competencyid e wstoken
*/

// const username = "michel.ribeiro";
// const password = "D16*08a1981";
// const token    = "419551137a94381ff28ea1eddce6615a";
// const userid   = "&userid=3104";
// const courseid = "&courseid=1595"

// const loggin               = `${paths.LOGIN}&username=${username}&password=${password}${services.SERVICE}`;
// const userData             = `${paths.PATH_BASE}&wstoken=${token}${services.MOODLEWSRESTFORMAT}${wsfunction.DATA_USER}`;
// const getCollegeSubject    = `${paths.PATH_BASE}&wstoken=${token}${services.MOODLEWSRESTFORMAT}${wsfunction.COLLEGE_SUBJECTS}${userid}`;
// const getCompetenceSubject = `${paths.PATH_BASE}&wstoken=${token}${services.MOODLEWSRESTFORMAT}${services.FILTER}${services.FILE_URL}${wsfunction.COMPETENCE}${courseid}`;

