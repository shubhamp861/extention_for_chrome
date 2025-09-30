SELECT comp.id,
       comp.state,
       comp.is_committed,
       comp.review_id,
       cov.covering_user_meu_id,
       cov.role_type
FROM   T_AV_REVIEW_COMPONENTS comp
JOIN   T_AV_REVIEW_COVERAGE cov
       ON comp.id = cov.review_component_id
WHERE  comp.state IN ('R', 'A', 'CS', 'M')
  AND  comp.is_committed = 'N'
  AND  comp.review_id = 113
  AND  cov.covering_user_meu_id = 23
  AND  cov.role_type = 'R';

