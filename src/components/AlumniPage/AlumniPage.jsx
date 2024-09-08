
import React from 'react';
import BatchList from './BatchList'; // Ensure the correct path
import styles from './AlumniPage.module.css'; // Assuming you have a CSS module

const batches = [
  {
    batchNumber: 1,
    students: [
      {
        name: 'Zain Ul Abideen',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Software Engineer at Devinic',
        destination: 'Software Eng',
        qualification: 'BS Software Eng',
      },
      {
        name: 'Rehman Shah',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Bolan Medical Complex',
        destination: 'Medical Officer',
        qualification: 'MBBS',
      },
      {
        name: 'Ghulam Hussain',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Bolan Medical Complex',
        destination: 'Medical Officer',
        qualification: 'MBBS',
      }, 
      {
        name: 'Zakariya',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Ahmed Ali',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Saeed Ahmed',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Ahmed Ali',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Saeed Ahmed',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      // Add more students
    ],
  },
  {
    batchNumber: 2,
    students: [
      { name: 'Zara Ahmed', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Teacher', destination: 'Education Department', qualification: 'M.Ed' },
      { name: 'Bilal Khan', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Financial Analyst', destination: 'Finance Department', qualification: 'BBA Finance' },
      { name: 'Sara Iqbal', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Graphic Designer', destination: 'Design Department', qualification: 'BS Graphic Design' },
      { name: 'Aliya Hussain', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Pharmacist', destination: 'Pharmacy Department', qualification: 'Pharm.D' },
      { name: 'Fahad Raza', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Electrical Engineer', destination: 'Electronics Department', qualification: 'BS Electrical Engineering' },
      // Add more students for batch 2
    ],
  },
  {
    batchNumber: 3,
    students: [
      { name: 'Asad Ali', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Web Developer', destination: 'Development Department', qualification: 'BS Computer Science' },
      { name: 'Nadia Khan', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Business Analyst', destination: 'Business Department', qualification: 'MS Business Analytics' },
      { name: 'Jamil Ahmed', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Mechanical Engineer', destination: 'Engineering Department', qualification: 'BS Mechanical Engineering' },
      { name: 'Meher Ali', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Medical Officer', destination: 'Healthcare Department', qualification: 'MBBS' },
      { name: 'Rashid Iqbal', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Economist', destination: 'Economic Department', qualification: 'MS Economics' },
      // Add more students for batch 3
    ],
  },
  {
    batchNumber: 4,
    students: [
      { name: 'Ishaq Saleem', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Architect', destination: 'Architecture Department', qualification: 'BS Architecture' },
      { name: 'Saira Aziz', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Accountant', destination: 'Finance Department', qualification: 'BS Accounting' },
      { name: 'Zubair Hussain', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Content Writer', destination: 'Media Department', qualification: 'BS Journalism' },
      { name: 'Tariq Mahmood', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Project Manager', destination: 'Project Management Department', qualification: 'MBA' },
      { name: 'Huma Shah', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Biotechnologist', destination: 'Biotechnology Department', qualification: 'BS Biotechnology' },
      // Add more students for batch 4
    ],
  },


  {
    batchNumber: 5,
    students: [
      {
        name: 'Zain Ul Abideen',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Software Engineer at Devinic',
        destination: 'Software Eng',
        qualification: 'BS Software Eng',
      },
      {
        name: 'Rehman Shah',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Bolan Medical Complex',
        destination: 'Medical Officer',
        qualification: 'MBBS',
      },
      {
        name: 'Ghulam Hussain',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Bolan Medical Complex',
        destination: 'Medical Officer',
        qualification: 'MBBS',
      }, 
      {
        name: 'Zakariya',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Ahmed Ali',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Saeed Ahmed',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Ahmed Ali',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Saeed Ahmed',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      // Add more students
    ],
  },
  {
    batchNumber: 6,
    students: [
      { name: 'Zara Ahmed', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Teacher', destination: 'Education Department', qualification: 'M.Ed' },
      { name: 'Bilal Khan', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Financial Analyst', destination: 'Finance Department', qualification: 'BBA Finance' },
      { name: 'Sara Iqbal', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Graphic Designer', destination: 'Design Department', qualification: 'BS Graphic Design' },
      { name: 'Aliya Hussain', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Pharmacist', destination: 'Pharmacy Department', qualification: 'Pharm.D' },
      { name: 'Fahad Raza', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Electrical Engineer', destination: 'Electronics Department', qualification: 'BS Electrical Engineering' },
      // Add more students for batch 2
    ],
  },
  {
    batchNumber: 7,
    students: [
      { name: 'Asad Ali', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Web Developer', destination: 'Development Department', qualification: 'BS Computer Science' },
      { name: 'Nadia Khan', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Business Analyst', destination: 'Business Department', qualification: 'MS Business Analytics' },
      { name: 'Jamil Ahmed', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Mechanical Engineer', destination: 'Engineering Department', qualification: 'BS Mechanical Engineering' },
      { name: 'Meher Ali', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Medical Officer', destination: 'Healthcare Department', qualification: 'MBBS' },
      { name: 'Rashid Iqbal', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Economist', destination: 'Economic Department', qualification: 'MS Economics' },
      // Add more students for batch 3
    ],
  },
  {
    batchNumber: 8,
    students: [
      { name: 'Ishaq Saleem', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Architect', destination: 'Architecture Department', qualification: 'BS Architecture' },
      { name: 'Saira Aziz', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Accountant', destination: 'Finance Department', qualification: 'BS Accounting' },
      { name: 'Zubair Hussain', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Content Writer', destination: 'Media Department', qualification: 'BS Journalism' },
      { name: 'Tariq Mahmood', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Project Manager', destination: 'Project Management Department', qualification: 'MBA' },
      { name: 'Huma Shah', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Biotechnologist', destination: 'Biotechnology Department', qualification: 'BS Biotechnology' },
      // Add more students for batch 4
    ],
  },




  {
    batchNumber: 9,
    students: [
      {
        name: 'Zain Ul Abideen',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Software Engineer at Devinic',
        destination: 'Software Eng',
        qualification: 'BS Software Eng',
      },
      {
        name: 'Rehman Shah',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Bolan Medical Complex',
        destination: 'Medical Officer',
        qualification: 'MBBS',
      },
      {
        name: 'Ghulam Hussain',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Bolan Medical Complex',
        destination: 'Medical Officer',
        qualification: 'MBBS',
      }, 
      {
        name: 'Zakariya',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Ahmed Ali',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Saeed Ahmed',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Ahmed Ali',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Saeed Ahmed',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      // Add more students
    ],
  },
  {
    batchNumber: 10,
    students: [
      { name: 'Zara Ahmed', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Teacher', destination: 'Education Department', qualification: 'M.Ed' },
      { name: 'Bilal Khan', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Financial Analyst', destination: 'Finance Department', qualification: 'BBA Finance' },
      { name: 'Sara Iqbal', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Graphic Designer', destination: 'Design Department', qualification: 'BS Graphic Design' },
      { name: 'Aliya Hussain', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Pharmacist', destination: 'Pharmacy Department', qualification: 'Pharm.D' },
      { name: 'Fahad Raza', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Electrical Engineer', destination: 'Electronics Department', qualification: 'BS Electrical Engineering' },
      // Add more students for batch 2
    ],
  },
  {
    batchNumber: 11,
    students: [
      { name: 'Asad Ali', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Web Developer', destination: 'Development Department', qualification: 'BS Computer Science' },
      { name: 'Nadia Khan', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Business Analyst', destination: 'Business Department', qualification: 'MS Business Analytics' },
      { name: 'Jamil Ahmed', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Mechanical Engineer', destination: 'Engineering Department', qualification: 'BS Mechanical Engineering' },
      { name: 'Meher Ali', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Medical Officer', destination: 'Healthcare Department', qualification: 'MBBS' },
      { name: 'Rashid Iqbal', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Economist', destination: 'Economic Department', qualification: 'MS Economics' },
      // Add more students for batch 3
    ],
  },
  {
    batchNumber: 12,
    students: [
      { name: 'Ishaq Saleem', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Architect', destination: 'Architecture Department', qualification: 'BS Architecture' },
      { name: 'Saira Aziz', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Accountant', destination: 'Finance Department', qualification: 'BS Accounting' },
      { name: 'Zubair Hussain', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Content Writer', destination: 'Media Department', qualification: 'BS Journalism' },
      { name: 'Tariq Mahmood', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Project Manager', destination: 'Project Management Department', qualification: 'MBA' },
      { name: 'Huma Shah', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Biotechnologist', destination: 'Biotechnology Department', qualification: 'BS Biotechnology' },
      // Add more students for batch 4
    ],
  },


  {
    batchNumber: 13,
    students: [
      {
        name: 'Zain Ul Abideen',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Software Engineer at Devinic',
        destination: 'Software Eng',
        qualification: 'BS Software Eng',
      },
      {
        name: 'Rehman Shah',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Bolan Medical Complex',
        destination: 'Medical Officer',
        qualification: 'MBBS',
      },
      {
        name: 'Ghulam Hussain',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Bolan Medical Complex',
        destination: 'Medical Officer',
        qualification: 'MBBS',
      }, 
      {
        name: 'Zakariya',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Ahmed Ali',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Saeed Ahmed',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Ahmed Ali',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      {
        name: 'Saeed Ahmed',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s',
        currentRole: 'Balochistan Sectriat',
        destination: 'Section Officer',
        qualification: 'MS Chemical Eng',
      },
      // Add more students
    ],
  },
  {
    batchNumber: 14,
    students: [
      { name: 'Zara Ahmed', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Teacher', destination: 'Education Department', qualification: 'M.Ed' },
      { name: 'Bilal Khan', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Financial Analyst', destination: 'Finance Department', qualification: 'BBA Finance' },
      { name: 'Sara Iqbal', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Graphic Designer', destination: 'Design Department', qualification: 'BS Graphic Design' },
      { name: 'Aliya Hussain', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Pharmacist', destination: 'Pharmacy Department', qualification: 'Pharm.D' },
      { name: 'Fahad Raza', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Electrical Engineer', destination: 'Electronics Department', qualification: 'BS Electrical Engineering' },
      // Add more students for batch 2
    ],
  },
  {
    batchNumber: 15,
    students: [
      { name: 'Asad Ali', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Web Developer', destination: 'Development Department', qualification: 'BS Computer Science' },
      { name: 'Nadia Khan', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Business Analyst', destination: 'Business Department', qualification: 'MS Business Analytics' },
      { name: 'Jamil Ahmed', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Mechanical Engineer', destination: 'Engineering Department', qualification: 'BS Mechanical Engineering' },
      { name: 'Meher Ali', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Medical Officer', destination: 'Healthcare Department', qualification: 'MBBS' },
      { name: 'Rashid Iqbal', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP34iSqZQyUhayGE4vjJnPqZJWfEDXq67Udg&s', currentRole: 'Economist', destination: 'Economic Department', qualification: 'MS Economics' },
      // Add more students for batch 3
    ],
  },

  // Add more batches as needed
];

const AlumniPage = () => {
  return (
    <div className={`{styles.alumniSection} container`}>
      <BatchList batches={batches} />
    </div>
  );
};

export default AlumniPage;
